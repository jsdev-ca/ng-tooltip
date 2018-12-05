import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlPanelComponent } from './control-panel/control-panel.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // pathMatch: 'full',
    // redirectTo: '/control-panel'
  },
  {
    path: 'control-panel',
    component: ControlPanelComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {}
