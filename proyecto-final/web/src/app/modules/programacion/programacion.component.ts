import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cancha } from 'src/app/model/cancha.model';
import { Equipo } from 'src/app/model/equipo.model';
import { ProgramacionPartidos } from 'src/app/model/programacion-partidos.model';
import { LigaDeportivaService } from 'src/app/services/liga-deportiva.service';
import { EquipoComponent } from '../equipo/equipo.component';

@Component({
  selector: 'tr[app-programacion]',
  templateUrl: './programacion.component.html',
  styleUrls: ['./programacion.component.css']
})
export class ProgramacionComponent implements OnInit {

  @Input() programacion: ProgramacionPartidos = {};
  @Input() contador: number = 0;
  equipoLocal: Equipo = { id: 0, nombre: '', logo: '', fecha_afiliacion: null, capitan: 0, descripcion: '', email_contacto: '', telefono_contacto: '' };
  equipoVisita: Equipo = { id: 0, nombre: '', logo: '', fecha_afiliacion: null, capitan: 0, descripcion: '', email_contacto: '', telefono_contacto: '' };
  cancha: Cancha = {};
  @Output() ver: EventEmitter<ProgramacionPartidos>;

  constructor(
    private ligaService: LigaDeportivaService
  ) {
    this.ver = new EventEmitter();
  }

  ngOnInit(): void {
    this.initData();
  }

  private initData() {
    this.ligaService.getEquipo(this.programacion.equipo_local as number).subscribe(res => {
      this.equipoLocal = res;
    });
    this.ligaService.getEquipo(this.programacion.equipo_visita as number).subscribe(res => {
      this.equipoVisita = res;
    });
    this.ligaService.getCancha(this.programacion.cancha as number).subscribe(res => {
      this.cancha = res;
    });
  };

  verProgramacion() {
    this.ver.emit(this.programacion);
  }

}
