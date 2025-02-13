import { Component, Input } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import { SharedService } from '../shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [CommonModule]
})
export class HeaderComponent {
  @Input() title: string = '';
  currentRoute: string = '';
  titleMap: { [key: string]: string } = {
    '/': 'Home',
    '/about': 'About',
    '/projects': 'My Projects',
    '/contact': 'Contact Me'
  };
  constructor(private router: Router,private sharedService: SharedService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
       
        this.sharedService.updateTitle(this.titleMap[this.currentRoute]||'');
      }
    });
  }

  navigateTo(route: string){
    this.router.navigate([route]);
    
  }

  
}
