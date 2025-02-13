import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-experience-component',
  imports: [],
  templateUrl: './experience-component.component.html',
  styleUrl: './experience-component.component.css'
})
export class ExperienceComponentComponent {
  @Input() experiences: any[] = [];
  @Output() experienceClicked = new EventEmitter<string>();

  selectExperience(role: string) {
    this.experienceClicked.emit(role);
  }
}
  