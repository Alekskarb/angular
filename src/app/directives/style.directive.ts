import {Directive, ElementRef, Renderer2} from "@angular/core";

@Directive(
  {selector: '[appStyle]'}
)

export class StyleDirective {
  constructor(private elRef: ElementRef, private  renderer: Renderer2 ) {
    this.renderer.setStyle(elRef.nativeElement, 'color', 'blue')
    // elRef.nativeElement.style.color = 'blue';
  }
}
