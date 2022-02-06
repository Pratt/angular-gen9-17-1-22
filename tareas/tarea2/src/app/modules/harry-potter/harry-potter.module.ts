import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HarryPotterRoutingModule } from './harry-potter-routing.module';
import { HarryPotterComponent } from './harry-potter.component';


@NgModule({
  declarations: [
    HarryPotterComponent
  ],
  imports: [
    CommonModule,
    HarryPotterRoutingModule
  ]
})
export class HarryPotterModule { }
