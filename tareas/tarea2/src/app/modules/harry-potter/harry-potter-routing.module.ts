import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HarryPotterComponent } from './harry-potter.component';

const routes: Routes = [{ path: '', component: HarryPotterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HarryPotterRoutingModule { }
