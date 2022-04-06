import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipo } from "../model/equipo.model";
import { Jugador } from '../model/jugador.model';
import { ProgramacionPartidos } from '../model/programacion-partidos.model';
import { Cancha } from '../model/cancha.model';
import { Arbitro } from '../model/arbitro.model';
import { Clasificacion } from '../model/clasificacion.model';
import { Partidos } from '../model/partidos.model';

@Injectable({
  providedIn: 'root'
})
export class LigaDeportivaService {

  private urlApi: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getEquipos(): Observable<Equipo[]> {
    return this.http.get<Equipo[]>(`${this.urlApi}/equipos`);
  }

  getEquipo(id: number): Observable<Equipo> {
    return this.http.get<Equipo>(`${this.urlApi}/equipo/${id}`);
  }

  getJugadoresPorEquipo(idEquipo: number): Observable<Jugador[]> {
    return this.http.get<Jugador[]>(`${this.urlApi}/equipo/${idEquipo}/jugadores`);
  }

  getJugador(id: number): Observable<Jugador> {
    return this.http.get<Jugador>(`${this.urlApi}/jugador/${id}`);
  }

  getEstadisticasJugador(id: number): Observable<any> {
    return this.http.get(`${this.urlApi}/jugador/${id}/estadisticas`);
  }

  updateEquipo(equipo: Equipo): Observable<any> {
    return this.http.put(`${this.urlApi}/equipo/${equipo.id}`, equipo);
  }

  getProgramacionPartidos(): Observable<ProgramacionPartidos[]> {
    return this.http.get<ProgramacionPartidos[]>(`${this.urlApi}/programacion-partidos`);
  }

  getProgramacion(id: number): Observable<ProgramacionPartidos> {
    return this.http.get<ProgramacionPartidos>(`${this.urlApi}/programacion/${id}`);
  }

  getCancha(id: number): Observable<Cancha> {
    return this.http.get<Cancha>(`${this.urlApi}/cancha/${id}`);
  }

  getCanchas(): Observable<Cancha[]> {
    return this.http.get<Cancha[]>(`${this.urlApi}/canchas`);
  }

  getArbitro(id: number): Observable<Arbitro> {
    return this.http.get<Arbitro>(`${this.urlApi}/arbitro/${id}`);
  }

  getArbitros(): Observable<Arbitro[]> {
    return this.http.get<Arbitro[]>(`${this.urlApi}/arbitros`);
  }

  updateProgramacion(programacion: ProgramacionPartidos): Observable<any> {
    return this.http.put(`${this.urlApi}/programacion/${programacion.id}`, programacion);
  }

  createProgramacion(programacion: ProgramacionPartidos): Observable<any> {
    return this.http.post(`${this.urlApi}/programacion`, programacion);
  }

  deleteProgramacion(id: number): Observable<any> {
    return this.http.delete(`${this.urlApi}/programacion/${id}`);
  }

  getClasificacion(): Observable<Clasificacion[]> {
    return this.http.get<Clasificacion[]>(`${this.urlApi}/clasificacion`);
  }

  getRondas(): Observable<number[]> {
    return this.http.get<number[]>(`${this.urlApi}/rondas`);
  }

  getPartidos(ronda: number): Observable<Partidos[]> {
    return this.http.get<Partidos[]>(`${this.urlApi}/partidos/${ronda}`);
  }

  getFraseDelDia(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}/frase-del-dia`);
  }

}
