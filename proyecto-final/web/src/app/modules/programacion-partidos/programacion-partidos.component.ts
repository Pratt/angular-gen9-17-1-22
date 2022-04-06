import { Component, OnInit } from '@angular/core';
import { ProgramacionPartidos } from 'src/app/model/programacion-partidos.model';
import { LigaDeportivaService } from 'src/app/services/liga-deportiva.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-programacion-partidos',
  templateUrl: './programacion-partidos.component.html',
  styleUrls: ['./programacion-partidos.component.css']
})
export class ProgramacionPartidosComponent implements OnInit {

  programacion: ProgramacionPartidos[] = [];
  ver: ProgramacionPartidos = {};

  constructor(
    private ligaService: LigaDeportivaService,
    public auth: AuthService
  ) {
  }

  ngOnInit(): void {
    this.getProgramacion();
  }

  getProgramacion() {
    this.ligaService.getProgramacionPartidos().subscribe(res => {
      this.programacion = res;
    });
  };

  verProgramacion(prog: ProgramacionPartidos) {

    this.ver = prog;

    this.ligaService.getEquipo(this.ver.equipo_local as number).subscribe(res => {
      this.ver.equipo_local_obj = res;
    });

    this.ligaService.getEquipo(this.ver.equipo_visita!).subscribe(res => {
      this.ver.equipo_visita_obj = res;
    });

    this.ligaService.getArbitro(this.ver.arbitro!).subscribe(res => {
      this.ver.arbitro_obj = res;
    });

    this.ligaService.getCancha(this.ver.cancha!).subscribe(res => {
      this.ver.cancha_obj = res;
    });

  }

  loginEdit() {
    this.auth.loginWithRedirect({
      appState: { target: '/programacion/edit/' + this.ver.id }
    });
  }

  loginAdd() {
    this.auth.loginWithRedirect({
      appState: { target: '/programacion/add' }
    });
  }

  eliminar() {
    if (confirm('¿Desea eliminar este encuentro?')) {
      this.ligaService.deleteProgramacion(this.ver.id as number).subscribe(res => {
        document.location.reload();
      });
    }
  }

}
