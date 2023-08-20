import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {
  private isDragging = false;
  private initialTop = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.initialTop = event.clientY - this.el.nativeElement.getBoundingClientRect().top;
    this.el.nativeElement.style.transition = 'none';
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;
    
    const nav = this.el.nativeElement;
    const movementY = event.clientY - nav.getBoundingClientRect().top - this.initialTop;
    const navStyle = window.getComputedStyle(nav);
    const navTop = parseInt(navStyle.top);
    const navHeight = parseInt(navStyle.height);
    const windHeight = window.innerHeight;

    nav.style.top = navTop > 0 ? `${navTop + movementY}px` : '1px';
    if (navTop > windHeight - navHeight) {
      nav.style.top = `${windHeight - navHeight}px`;
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.isDragging = false;
    this.el.nativeElement.style.transition = '';
  }
}
