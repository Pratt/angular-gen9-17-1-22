import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equipo } from 'src/app/model/equipo.model';
import { LigaDeportivaService } from 'src/app/services/liga-deportiva.service';
import { Jugador } from "src/app/model/jugador.model";
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  equipo: Equipo = { id: 0, nombre: '', logo: '', fecha_afiliacion: null, capitan: 0, descripcion: '', email_contacto: '', telefono_contacto: '' };
  jugadores: Jugador[] = [];
  jugador: Jugador = { id: 0, nombre: '', equipo: 0, numero_camiseta: 0, estadisticas: {} };

  constructor(
    private ligaService: LigaDeportivaService,
    private activatedRoute: ActivatedRoute,
    public auth: AuthService
  ) {

    this.activatedRoute.params.subscribe(params => {

      this.ligaService.getEquipo(params['id']).subscribe(res => {
        this.equipo = res;
      });

      this.ligaService.getJugadoresPorEquipo(params['id']).subscribe(res => {
        this.jugadores = res;
      });

    });

  }

  ngOnInit(): void {
  }

  verJugador(jugador: Jugador) {
    this.jugador = jugador;
    this.ligaService.getEstadisticasJugador(jugador.id).subscribe(res => {
      this.jugador.estadisticas = res;
    });
  }

  loginEdit() {
    this.auth.loginWithRedirect({
      appState: { target: '/equipo/edit/' + this.equipo.id }
    });
  }

}
