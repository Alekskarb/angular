import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from "@angular/core";

@Directive(
  {selector: '[appStyle]'}
)

export class StyleDirective {
  @Input('appStyle') color:string = 'blue';
  @Input() fontWeight = 'normal'
  @Input('dStyleObj') dStyleObj: { border?: string; borderRadius?: string; fontWeight?: string; } | undefined

  @HostBinding('style.color') elColor = ''
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  // this.renderer.setStyle(elRef.nativeElement, 'color', 'blue')
  // elRef.nativeElement.style.color = 'blue';
  @HostListener('click', ['$event.target']) onClick(e: Event) {
    console.log(e)
  }

  @HostListener('mouseenter') onEnter() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', this.color)
    this.elColor = this.color;
    this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight', this.dStyleObj?.fontWeight)
    this.renderer.setStyle(this.elRef.nativeElement, 'border', this.dStyleObj?.border)
    this.renderer.setStyle(this.elRef.nativeElement, 'borderRadius', this.dStyleObj?.borderRadius)
  }

  @HostListener('mouseleave') onLeave() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', null);
    this.elColor = '';

    this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight', null)
    this.renderer.setStyle(this.elRef.nativeElement, 'border', null)
    this.renderer.setStyle(this.elRef.nativeElement, 'borderRadius', null)
  }
}
