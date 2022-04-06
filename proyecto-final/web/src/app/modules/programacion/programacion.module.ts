import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramacionRoutingModule } from './programacion-routing.module';
import { ProgramacionComponent } from './programacion.component';


@NgModule({
  declarations: [
    ProgramacionComponent
  ],
  imports: [
    CommonModule,
    ProgramacionRoutingModule
  ],
  exports: [
    ProgramacionComponent
  ]
})
export class ProgramacionModule { }
