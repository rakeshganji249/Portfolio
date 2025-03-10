import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio-component',
  imports: [CommonModule,HighlightDirective],
  templateUrl: './portfolio-component.component.html',
  styleUrl: './portfolio-component.component.css'
})
export class PortfolioComponentComponent {
  
}
