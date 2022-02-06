import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameOfThroneRoutingModule } from './game-of-throne-routing.module';
import { GameOfThroneComponent } from './game-of-throne.component';


@NgModule({
  declarations: [
    GameOfThroneComponent
  ],
  imports: [
    CommonModule,
    GameOfThroneRoutingModule
  ]
})
export class GameOfThroneModule { }
