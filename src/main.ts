import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, RouterOutlet } from '@angular/router';
import { PortfolioComponentComponent } from './app/portfolio-component/portfolio-component.component';
import { AboutComponentComponent } from './app/about-component/about-component.component';
import { ProjectsComponentComponent } from './app/projects-component/projects-component.component';
import { ContactComponentComponent } from './app/contact-component/contact-component.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideHttpClient  } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';


const routes = [
  { path: '', component: PortfolioComponentComponent },
  { path: 'home', component: PortfolioComponentComponent },
  { path: 'about', component: AboutComponentComponent },
  { path: 'projects', component: ProjectsComponentComponent },
  { path: 'contact', component: ContactComponentComponent }
];

// bootstrapApplication(AppComponent, {
//   providers: [provideRouter(routes)]
// }).catch(err => console.error(err));
bootstrapApplication(AppComponent, {
  providers: [provideAnimations(), provideRouter(routes),provideHttpClient()]
}).catch(err => console.error(err));