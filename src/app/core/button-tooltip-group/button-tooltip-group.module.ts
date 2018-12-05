import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonTooltipGroupComponent } from './button-tooltip-group.component';
import { ButtonTooltipModule } from '../button-tooltip/button-tooltip.module';

@NgModule({
  declarations: [
    ButtonTooltipGroupComponent,
  ],
  exports: [
    ButtonTooltipGroupComponent
  ],
  imports: [
    CommonModule,
    ButtonTooltipModule
  ]
})
export class ButtonTooltipGroupModule {}
