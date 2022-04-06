import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardPartidoRoutingModule } from './card-partido-routing.module';
import { CardPartidoComponent } from './card-partido.component';


@NgModule({
  declarations: [
    CardPartidoComponent
  ],
  imports: [
    CommonModule,
    CardPartidoRoutingModule
  ],
  exports: [
    CardPartidoComponent
  ]
})
export class CardPartidoModule { }
