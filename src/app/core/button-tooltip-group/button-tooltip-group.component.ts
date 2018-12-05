import { Component, Input } from '@angular/core';

import { TooltipService } from '../utils/tooltip.service';
import { ButtonTooltipBundles } from '../../shared/models/button-tooltip-bundles.model';

@Component({
  selector: 'app-button-tooltip-group',
  templateUrl: './button-tooltip-group.component.html'
})
export class ButtonTooltipGroupComponent {
  constructor(private tooltipService: TooltipService) {}

  @Input() states: ButtonTooltipBundles;

  hideNeighbouringTooltip() {
    this.tooltipService.hideNeighbouringTooltip(this.states);
  }
}
