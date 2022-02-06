import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameOfThroneComponent } from './game-of-throne.component';

const routes: Routes = [{ path: '', component: GameOfThroneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameOfThroneRoutingModule { }
