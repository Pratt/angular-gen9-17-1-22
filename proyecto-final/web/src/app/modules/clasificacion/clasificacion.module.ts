import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasificacionRoutingModule } from './clasificacion-routing.module';
import { ClasificacionComponent } from './clasificacion.component';


@NgModule({
  declarations: [
    ClasificacionComponent
  ],
  imports: [
    CommonModule,
    ClasificacionRoutingModule
  ]
})
export class ClasificacionModule { }
