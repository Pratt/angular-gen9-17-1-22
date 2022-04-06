import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarEquipoComponent } from './editar-equipo.component';

const routes: Routes = [{ path: '', component: EditarEquipoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarEquipoRoutingModule { }
