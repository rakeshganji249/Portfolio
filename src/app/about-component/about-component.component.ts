import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-component',
  imports: [CommonModule , RouterModule],
  templateUrl: './about-component.component.html',
  styleUrl: './about-component.component.css'
})
export class AboutComponentComponent {

}
