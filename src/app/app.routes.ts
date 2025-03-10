import { Routes } from '@angular/router';
import { PortfolioComponentComponent } from './portfolio-component/portfolio-component.component';


export const routes: Routes = [
    {path: '', component: PortfolioComponentComponent },
    {path:'home',component:PortfolioComponentComponent},
    {path:'about',loadComponent: ()=>import('./about-component/about-component.component').then(m=>m.AboutComponentComponent)},
    {path:'projects',loadComponent: ()=>import('./projects-component/projects-component.component').then(m=>m.ProjectsComponentComponent)},
    {path:'contact',loadComponent: ()=>import('./contact-component/contact-component.component').then(m=>m.ContactComponentComponent)},
    { path: '**', redirectTo: '' }
];
