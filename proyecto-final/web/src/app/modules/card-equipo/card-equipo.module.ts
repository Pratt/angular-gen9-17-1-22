import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardEquipoRoutingModule } from './card-equipo-routing.module';
import { CardEquipoComponent } from './card-equipo.component';


@NgModule({
  declarations: [
    CardEquipoComponent
  ],
  imports: [
    CommonModule,
    CardEquipoRoutingModule
  ],
  exports: [
    CardEquipoComponent
  ]
})
export class CardEquipoModule { }
