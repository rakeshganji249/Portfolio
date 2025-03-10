import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  Input,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  SimpleChanges,
  KeyValueDiffers,
  KeyValueDiffer,
  ContentChild,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../portfolio-service.service';
import { SharedService } from '../shared.service';
import { Subscription, interval } from 'rxjs';
import { ExperienceComponentComponent } from '../experience-component/experience-component.component';
import { RouterModule } from '@angular/router';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-projects-component',
  standalone: true,
  imports: [CommonModule, ExperienceComponentComponent, RouterModule],
  templateUrl: './projects-component.component.html',
  styleUrls: ['./projects-component.component.css'],
})
export class ProjectsComponentComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() pageTitle: string = '';

  projects: any[] = [];
  private subscription!: Subscription;
  private titleSubscription!: Subscription;
  selectedExperience: string | null = null;

  experiences = [
    { role: 'UIpath Developer', company: 'Cognine Technologies', years: '1 Year' },
    { role: 'Power apps Developer', company: 'Cognine Technologies', years: '0.5 Year' },
    { role: 'Frontend Angular Developer', company: 'Cognine Technologies', years: '0.5 Year' },
  ];

  showWarning = false;
  elapsedTime = 0;
  private timerSubscription: Subscription | undefined;
  contentChanged = false;
  private differ: KeyValueDiffer<string, any> | undefined;
  private contentCheckedCount = 0;
  private viewCheckedCount = 0;

  @ContentChild('extraContent') extraContent: ElementRef | undefined;
  @ViewChild('statusElement') statusElement: ElementRef | undefined;

  constructor(
    private portfolioService: PortfolioService,
    private sharedService: SharedService,
    private differs: KeyValueDiffers
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called:', changes);
    if (changes['pageTitle'] && !changes['pageTitle'].firstChange) {
      this.showWarning = true;
      setTimeout(() => {
        this.showWarning = false;
      }, 3000);
    }
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    this.subscription = this.portfolioService.getProjects().subscribe((data: Project[]) => {
      this.projects = data;
    });
    this.titleSubscription = this.sharedService.currentTitle$.subscribe((title) => {
      this.pageTitle = title;
      console.log('Received data:', this.pageTitle);
    });
    this.timerSubscription = interval(1000).subscribe(() => {
      this.elapsedTime++;
    });
    this.differ = this.differs
      .find({ pageTitle: this.pageTitle, projects: this.projects })
      .create();
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
    const changes = this.differ?.diff({ pageTitle: this.pageTitle, projects: this.projects });
    if (changes) {
      this.contentChanged = true;
      setTimeout(() => {
        this.contentChanged = false;
      }, 1000);
    }
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
    if (this.extraContent) {
      this.extraContent.nativeElement.style.color = 'green';
    }
  }

  ngAfterContentChecked(): void {
    this.contentCheckedCount++;
    console.log('ngAfterContentChecked called. Content checked count:', this.contentCheckedCount);
    if(this.extraContent){
        console.log("extra content present")
    }
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    if(this.statusElement){
      this.statusElement.nativeElement.textContent = "View Initialized";
    }
  }

  ngAfterViewChecked(): void {
    this.viewCheckedCount++;
    console.log('ngAfterViewChecked called. View checked count:', this.viewCheckedCount);
    if(this.statusElement?.nativeElement.textContent !== "View Initialized"){
      console.log("Status element content changed after initialization")
    }

  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.titleSubscription) {
      this.titleSubscription.unsubscribe();
    }
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  handleExperienceClick(role: string) {
    console.log(`Selected Experience: ${role}`);
    alert(`Selected Experience: ${role}`);
  }
}