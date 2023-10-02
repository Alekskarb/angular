import {Directive, ElementRef, HostListener, Renderer2} from "@angular/core";

@Directive(
  {selector: '[appStyle]'}
)

export class StyleDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  // this.renderer.setStyle(elRef.nativeElement, 'color', 'blue')
  // elRef.nativeElement.style.color = 'blue';
  @HostListener('click', ['$event.target']) onClick(e: Event) {
    console.log(e)
  }

  @HostListener('mouseenter') onEnter() {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue')
  }

  @HostListener('mouseleave') onLeave() {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', null)
  }
}
