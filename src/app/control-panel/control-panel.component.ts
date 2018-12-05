import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { AddStates, ClearStates } from './control-panel.actions';
import { ButtonTooltipBundle } from '../shared/models/button-tooltip-bundle.model';
import { ButtonTooltipBundles } from '../shared/models/button-tooltip-bundles.model';
import { ControlPanel } from '../shared/models/control-panel.model';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements AfterViewInit, OnDestroy {
  constructor(
    private store: Store<ControlPanel>
  ) {}

  state: ButtonTooltipBundle = {
    button: {
      classNames: 'btn-warning',
      content: 'D'
    },
    tooltip: {
      body: 'Gumbo beet greens corn soko endive gumbo gourd.',
      classNames: 'top',
      isVisible: false
    }
  };

  states: ButtonTooltipBundles = [
    {
      button: {
        classNames: 'btn-primary',
        content: 'A'
      },
      tooltip: {
        body: 'Bacon ipsum dolor amet ham pork shankle.',
        classNames: 'top',
        isVisible: false
      }
    },
    {
      button: {
        classNames: 'btn-danger',
        content: 'B'
      },
      tooltip: {
        body: 'Kielbasa chicken turkey frankfurter doner boudin cow short loin meatball sirloin.',
        classNames: 'top',
        isVisible: false
      }
    },
    {
      button: {
        classNames: 'btn-success',
        content: 'C'
      },
      tooltip: {
        body: 'Venison rump drumstick flank kielbasa salami shoulder tail.',
        classNames: 'top',
        isVisible: false
      }
    }
  ];

  ngAfterViewInit(): void {
    this.store.dispatch(
      new AddStates([].concat(this.states, this.state))
    );
  }

  ngOnDestroy(): void {
    this.store.dispatch(
      new ClearStates()
    );
  }
}
