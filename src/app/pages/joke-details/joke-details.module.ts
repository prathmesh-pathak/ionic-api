import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JokeDetailsPageRoutingModule } from './joke-details-routing.module';

import { JokeDetailsPage } from './joke-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JokeDetailsPageRoutingModule
  ],
  declarations: [JokeDetailsPage]
})
export class JokeDetailsPageModule {}
