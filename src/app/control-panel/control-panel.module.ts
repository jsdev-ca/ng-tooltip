import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { ControlPanelComponent } from './control-panel.component';
import { controlPanelReducer } from './control-panel.reducer';
import { ButtonTooltipModule } from '../core/button-tooltip/button-tooltip.module';
import { ButtonTooltipGroupModule } from '../core/button-tooltip-group/button-tooltip-group.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    ControlPanelComponent
  ],
  exports: [
    ControlPanelComponent
  ],
  imports: [
    AppRoutingModule,
    ButtonTooltipModule,
    ButtonTooltipGroupModule,
    StoreModule.forFeature('control-panel', { states: controlPanelReducer })
  ]
})
export class ControlPanelModule {}
