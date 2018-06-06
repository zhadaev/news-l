import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[link]'
})
export class LinkDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

    this.renderer.setAttribute(this.elementRef.nativeElement, 'class', 'btn btn-waves waves-effect indigo darken-3');
  }
}
