import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'equipos', loadChildren: () => import('./modules/equipos/equipos.module').then(m => m.EquiposModule) },
  { path: 'equipo/:id', loadChildren: () => import('./modules/equipo/equipo.module').then(m => m.EquipoModule) },
  { path: 'equipo/edit/:id', loadChildren: () => import('./modules/editar-equipo/editar-equipo.module').then(m => m.EditarEquipoModule), canActivate: [AuthGuard] },
  { path: 'programacion-partidos', loadChildren: () => import('./modules/programacion-partidos/programacion-partidos.module').then(m => m.ProgramacionPartidosModule) },
  { path: 'programacion/edit/:id', loadChildren: () => import('./modules/programacion-edit/programacion-edit.module').then(m => m.ProgramacionEditModule), canActivate: [AuthGuard] },
  { path: 'programacion/add', loadChildren: () => import('./modules/programacion-edit/programacion-edit.module').then(m => m.ProgramacionEditModule), canActivate: [AuthGuard] },
  { path: 'resultados', loadChildren: () => import('./modules/resultados/resultados.module').then(m => m.ResultadosModule) },
  { path: 'clasificacion', loadChildren: () => import('./modules/clasificacion/clasificacion.module').then(m => m.ClasificacionModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
