import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  HostListener,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  standalone: true,
})
export class TooltipDirective {
  tooltipTitle: string = 'Nusxa olish uchun bosing!';
  @Input() placement: string = 'right';
  @Input() delay: number = 200;

  tooltip?: HTMLElement;
  offset = 10;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.tooltip) {
      this.show();
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltip) {
      this.hide();
      this.tooltipTitle = 'Nusxa olish uchun bosing!';
    }
  }

  @HostListener('click') onClick() {
    if (this.tooltip) {
      this.tooltip.textContent = 'Nusxa olindi!';
    }
  }

  show() {
    this.create();
    this.setPosition();
    this.tooltip?.classList.add('ng-tooltip-show');
  }

  hide() {
    setTimeout(() => {
      this.tooltip?.classList.remove('ng-tooltip-show');
      this.tooltip?.remove();
      this.tooltip = undefined;
    }, this.delay);
  }

  create() {
    this.tooltip = document.createElement('span');
    this.tooltip.classList.add('ng-tooltip');
    this.tooltip.classList.add(`ng-tooltip-${this.placement}`);
    this.tooltip.textContent = this.tooltipTitle;
    document.body.appendChild(this.tooltip);
  }

  setPosition() {
    const elemRect = this.el.nativeElement.getBoundingClientRect();
    const tooltipRect = this.tooltip?.getBoundingClientRect();
    if (!tooltipRect) return;
    let left, top;

    switch (this.placement) {
      case 'top':
        top = elemRect.top - tooltipRect.height - this.offset;
        left = elemRect.left + (elemRect.width - tooltipRect.width) / 2;
        break;
      case 'bottom':
        left = elemRect.left + (elemRect.width - tooltipRect.width) / 2;
        top = elemRect.bottom + this.offset;
        break;
      case 'left':
        left = elemRect.left - tooltipRect.width - this.offset;
        top = elemRect.top + (elemRect.height - tooltipRect.height) / 2;
        break;
      case 'right':
        left = elemRect.right + this.offset;
        top = elemRect.top + (elemRect.height - tooltipRect.height) / 2;
        break;
      default:
        throw new Error('Placement should be top, bottom, left or right');
    }

    if (this.tooltip) {
      this.tooltip.style.left = left + 'px';
      this.tooltip.style.top = top + 'px';
    }
  }
}
