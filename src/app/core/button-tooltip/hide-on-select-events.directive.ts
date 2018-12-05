import { Directive, ElementRef, HostListener, Input } from '@angular/core';

import { TooltipService } from '../utils/tooltip.service';
import { ButtonTooltipBundle } from '../../shared/models/button-tooltip-bundle.model';

@Directive({
  selector: '[appHideOnSelectEvents]'
})
export class HideOnSelectEventsDirective {
  constructor(
    private el: ElementRef,
    private tooltipService: TooltipService
  ) {}

  @Input() state: ButtonTooltipBundle;

  @HostListener('window:click', ['$event']) onWindowClick(event) {
    const tooltip = this.el.nativeElement.querySelector('.tooltip-inner');
    const condition = tooltip === event.target;

    this.toggleTooltipOnConditionNotObtaining(condition);
  }

  @HostListener('window:keydown', ['$event']) onKeyDown(event) {
    const condition = event.code !== 'Escape';

    this.toggleTooltipOnConditionNotObtaining(condition);
  }

  toggleTooltipOnConditionNotObtaining(condition) {
    const { isVisible } = this.state.tooltip;

    if (condition || !isVisible) {
      return;
    }

    this.tooltipService.toggleTooltip(this.state.tooltip, {
      isVisible: !isVisible
    });
  }
}
