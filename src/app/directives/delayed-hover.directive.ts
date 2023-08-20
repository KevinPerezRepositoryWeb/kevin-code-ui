import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[delayedHover]'
})
export class DelayedHoverDirective {
  private timeout: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.timeout = setTimeout(() => {
      this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    }, 3000);
  }

  @HostListener('mouseleave') onMouseLeave() {
    clearTimeout(this.timeout);
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'default');
  }
}



