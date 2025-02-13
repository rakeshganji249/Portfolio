import { Routes } from '@angular/router';
import { PortfolioComponentComponent } from './portfolio-component/portfolio-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { ProjectsComponentComponent } from './projects-component/projects-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';

export const routes: Routes = [
    {path: '', component: PortfolioComponentComponent },
    {path:'home',component:PortfolioComponentComponent},
    {path:'about',component:AboutComponentComponent},
    {path:'projects',component:ProjectsComponentComponent},
    {path:'contact',component:ContactComponentComponent},
    { path: '**', redirectTo: '' }
];
