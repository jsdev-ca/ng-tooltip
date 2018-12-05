import { NgModule } from '@angular/core';

import { ButtonComponent } from './button/button.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ButtonTooltipComponent } from './button-tooltip.component';
import { HideOnSelectEventsDirective } from './hide-on-select-events.directive';
import { RepositionOnProximityToEdgeDirective } from './reposition-on-proximity-to-edge.directive';

@NgModule({
  declarations: [
    ButtonComponent,
    TooltipComponent,
    ButtonTooltipComponent,
    HideOnSelectEventsDirective,
    RepositionOnProximityToEdgeDirective
  ],
  exports: [
    ButtonTooltipComponent
  ]
})
export class ButtonTooltipModule {}
