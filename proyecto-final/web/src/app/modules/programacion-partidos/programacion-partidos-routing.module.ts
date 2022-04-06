import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramacionPartidosComponent } from './programacion-partidos.component';

const routes: Routes = [{ path: '', component: ProgramacionPartidosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramacionPartidosRoutingModule { }
