import { Component } from '@angular/core';

import { ButtonTooltipBundle } from '../shared/models/button-tooltip-bundle.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  state: ButtonTooltipBundle = {
    button: {
      classNames: 'btn-info',
      content: 'A'
    },
    tooltip: {
      body: 'Turnip yarrow cauliflower.',
      classNames: 'top',
      isVisible: false
    }
  };
}
