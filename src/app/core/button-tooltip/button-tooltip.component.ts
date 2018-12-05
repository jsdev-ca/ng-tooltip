import { Component, Input, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { noop } from 'rxjs/internal-compatibility';

import { TooltipService } from '../utils/tooltip.service';
import { ButtonTooltipBundle } from '../../shared/models/button-tooltip-bundle.model';
import { ControlPanel } from '../../shared/models/control-panel.model';

@Component({
  selector: 'app-button-tooltip',
  templateUrl: './button-tooltip.component.html',
  styleUrls: ['./button-tooltip.component.scss']
})
export class ButtonTooltipComponent implements OnDestroy {
  constructor(
    private store: Store<ControlPanel>,
    private tooltipService: TooltipService
  ) {}

  @Input() onButtonClick: Function = noop;
  @Input() state: ButtonTooltipBundle;

  subscription: any;

  hideNeighbouringTooltip() {
    // Avoid using `pathname`?
    const pathname = window.location.pathname.substring(1);

    if (!pathname) {
      return;
    }

    // If `includeAllBundlesOnPage` is set to `false`, then only the neighbouring
    // tooltip that’s open in the relevant button-tooltip-group is closed.
    const includeAllBundlesOnPage = true;

    if (includeAllBundlesOnPage) {
      let states = null;

      this.subscription = this.store
        .pipe(select(pathname))
        .subscribe((data: ControlPanel) => (states = data.states));

      this.tooltipService.hideNeighbouringTooltip(states);

      return;
    }

    this.onButtonClick();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  toggleTooltip(updatedState) {
    this.tooltipService.toggleTooltip(this.state.tooltip, updatedState);
  }
}
