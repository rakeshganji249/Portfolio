import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-contact-component',
  imports: [CommonModule,RouterModule,ReactiveFormsModule,MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './contact-component.component.html',
  styleUrl: './contact-component.component.css'
})
export class ContactComponentComponent implements OnInit {
  
  @Input() pageTitle: string = '';
  
  contactForm: FormGroup;

  constructor(private fb: FormBuilder,private sharedService: SharedService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
    
   
  }
  
  ngOnInit(): void {
    this.sharedService.currentTitle$.subscribe(title => {
      this.pageTitle = title;
      console.log('Received data:', this.pageTitle);
    });
    
  }
  

  submitForm() {
    if (this.contactForm.valid) {
      fetch('https://formspree.io/f/mnnjzkpq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.contactForm.value),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Email sent successfully', data);
        alert('Email Sent Successfully!');
        this.contactForm.reset();
      })
      .catch(error => console.error('Error:', error));
    }
  }
}
