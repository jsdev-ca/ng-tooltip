import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2
} from '@angular/core';

import { ButtonTooltipBundle } from '../../shared/models/button-tooltip-bundle.model';

@Directive({
  selector: '[appRepositionOnProximityToEdge]'
})
export class RepositionOnProximityToEdgeDirective implements AfterViewInit, OnDestroy {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  @Input() state: ButtonTooltipBundle;

  button = null;
  children = null;
  onButtonClick: any;
  onWindowScroll: any;
  tooltip = null;

  ngAfterViewInit(): void {
    this.children = this.el.nativeElement.children;
    this.tooltip = this.children[0].querySelector('.tooltip-inner');
    this.button = this.children[1].querySelector('.btn');

    this.onButtonClick = this.repositionTooltip.bind(this);
    this.button.addEventListener('click', this.onButtonClick);

    this.onWindowScroll = this.renderer.listen(
      window, 'scroll', this.repositionTooltip.bind(this)
    );
  }

  ngOnDestroy(): void {
    // The listener can’t be `this.repositionTooltip.bind(this)`;
    // it must be the variable to which it’s assigned.
    this.button.removeEventListener('click', this.onButtonClick);
    this.onWindowScroll();
  }

  repositionTooltip(): void {
    const buttonOffsetTop = this.button.getBoundingClientRect().top;
    const distanceBetweenButtonAndTooltip = 10;
    const pointerHeight = 10;
    const tooltipHeight = this.tooltip.getBoundingClientRect().height;

    this.state.tooltip.classNames =
      buttonOffsetTop - tooltipHeight - pointerHeight <= distanceBetweenButtonAndTooltip
        ? 'bottom'
        : 'top';
  }
}
