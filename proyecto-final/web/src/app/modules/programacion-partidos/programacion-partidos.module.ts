import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramacionPartidosRoutingModule } from './programacion-partidos-routing.module';
import { ProgramacionPartidosComponent } from './programacion-partidos.component';
import { ProgramacionModule } from "src/app/modules/programacion/programacion.module";

@NgModule({
  declarations: [
    ProgramacionPartidosComponent
  ],
  imports: [
    CommonModule,
    ProgramacionPartidosRoutingModule,
    ProgramacionModule
  ]
})
export class ProgramacionPartidosModule { }
