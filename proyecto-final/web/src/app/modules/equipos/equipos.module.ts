import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquiposRoutingModule } from './equipos-routing.module';
import { EquiposComponent } from './equipos.component';
import { CardEquipoModule } from "../../modules/card-equipo/card-equipo.module";

@NgModule({
  declarations: [
    EquiposComponent
  ],
  imports: [
    CommonModule,
    EquiposRoutingModule,
    CardEquipoModule
  ],
  exports: [
    EquiposComponent
  ]
})
export class EquiposModule { }
