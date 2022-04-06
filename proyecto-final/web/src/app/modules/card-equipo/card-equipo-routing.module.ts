import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardEquipoComponent } from './card-equipo.component';

const routes: Routes = [{ path: '', component: CardEquipoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardEquipoRoutingModule { }
