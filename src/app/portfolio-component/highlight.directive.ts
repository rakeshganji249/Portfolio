import { Directive,ElementRef,HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor( private el: ElementRef, private renderer: Renderer2) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#4d3f3f','#a3825d');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('#a3825d','black');
  }
  private highlight(backgroundColor: string | null,color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', backgroundColor);
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }

}
