import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JokeDetailsPage } from './joke-details.page';

const routes: Routes = [
  {
    path: '',
    component: JokeDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JokeDetailsPageRoutingModule {}
