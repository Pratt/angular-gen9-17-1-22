import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadosRoutingModule } from './resultados-routing.module';
import { ResultadosComponent } from './resultados.component';
import { CardPartidoModule } from "src/app/modules/card-partido/card-partido.module";

@NgModule({
  declarations: [
    ResultadosComponent
  ],
  imports: [
    CommonModule,
    ResultadosRoutingModule,
    CardPartidoModule
  ]
})
export class ResultadosModule { }
