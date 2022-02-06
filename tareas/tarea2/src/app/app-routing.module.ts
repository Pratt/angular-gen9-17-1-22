import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  { path: 'gameOfThrone', loadChildren: () => import('./modules/game-of-throne/game-of-throne.module').then(m => m.GameOfThroneModule) },
  { path: 'harryPotter', loadChildren: () => import('./modules/harry-potter/harry-potter.module').then(m => m.HarryPotterModule) },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
