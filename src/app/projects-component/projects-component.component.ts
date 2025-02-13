
import { Component, OnInit, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../portfolio-service.service';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';
import { ExperienceComponentComponent } from '../experience-component/experience-component.component';
import { RouterModule } from '@angular/router';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-projects-component',
  standalone: true,
  imports: [CommonModule , ExperienceComponentComponent , RouterModule ],
  templateUrl: './projects-component.component.html',
  styleUrls: ['./projects-component.component.css']
})
export class ProjectsComponentComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() pageTitle: string = '';
  
  
  projects: any[] = [];
  private subscription!: Subscription;
  private titleSubscription!: Subscription; 
  selectedExperience: string | null = null;
  experiences = [
    { role: 'UIpath Developer', company: 'Cognine Technologies', years: '1 Year' },
    { role: 'Power apps Developer', company: 'Cognine Technologies', years: '0.5 Year' },
    {role: 'Frontend Angular Developer', company: 'Cognine Technologies', years: '0.5 Year' }
  ];
  constructor(private portfolioService: PortfolioService,private sharedService: SharedService) {}

  ngOnInit(): void {
    console.log('PortfolioComponent Initialized');
    this.subscription = this.portfolioService.getProjects().subscribe((data: Project[]) => {
      this.projects = data;
    });
    this.titleSubscription = this.sharedService.currentTitle$.subscribe(title => {
      this.pageTitle = title;
      console.log('Received data:', this.pageTitle);
    });
  }

  ngAfterViewInit(): void {
    console.log('PortfolioComponent View Loaded');
  }

  ngOnDestroy(): void {
    console.log('PortfolioComponent Destroyed');
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.titleSubscription) {
      this.titleSubscription.unsubscribe();
    }
  }
  
  handleExperienceClick(role: string) {
    console.log(`Selected Experience: ${role}`);
    alert(`Selected Experience: ${role}`);
  }
}
