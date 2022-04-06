import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarEquipoRoutingModule } from './editar-equipo-routing.module';
import { EditarEquipoComponent } from './editar-equipo.component';


@NgModule({
  declarations: [
    EditarEquipoComponent
  ],
  imports: [
    CommonModule,
    EditarEquipoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditarEquipoModule { }
