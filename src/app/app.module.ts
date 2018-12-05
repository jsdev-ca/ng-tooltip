import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { ControlPanelModule } from './control-panel/control-panel.module';
import { ButtonTooltipModule } from './core/button-tooltip/button-tooltip.module';
import { ButtonTooltipGroupModule } from './core/button-tooltip-group/button-tooltip-group.module';
import { TooltipService } from './core/utils/tooltip.service';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonTooltipModule,
    ButtonTooltipGroupModule,
    ControlPanelModule,
    StoreModule.forRoot({})
  ],
  providers: [
    TooltipService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
