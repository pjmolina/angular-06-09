import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResaltar]',
})
export class ResaltarDirective {
  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'background-color', 'orange');
  }
}
