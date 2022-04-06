import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardPartidoComponent } from './card-partido.component';

const routes: Routes = [{ path: '', component: CardPartidoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardPartidoRoutingModule { }
