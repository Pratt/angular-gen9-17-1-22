import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgramacionEditRoutingModule } from './programacion-edit-routing.module';
import { ProgramacionEditComponent } from './programacion-edit.component';


@NgModule({
  declarations: [
    ProgramacionEditComponent
  ],
  imports: [
    CommonModule,
    ProgramacionEditRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProgramacionEditModule { }
