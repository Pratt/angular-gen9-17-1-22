import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramacionEditComponent } from './programacion-edit.component';

const routes: Routes = [{ path: '', component: ProgramacionEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramacionEditRoutingModule { }
