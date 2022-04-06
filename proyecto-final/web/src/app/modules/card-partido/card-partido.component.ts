import { Component, Input, OnInit } from '@angular/core';
import { Partidos } from 'src/app/model/partidos.model';
import { LigaDeportivaService } from 'src/app/services/liga-deportiva.service';

@Component({
  selector: 'app-card-partido',
  templateUrl: './card-partido.component.html',
  styleUrls: ['./card-partido.component.css']
})
export class CardPartidoComponent implements OnInit {

  @Input() partido: Partidos = {};

  constructor(
    private ligaService: LigaDeportivaService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.ligaService.getEquipo(this.partido.equipo_local!).subscribe(res => {
      this.partido.equipo_local_obj = res;
    });
    this.ligaService.getEquipo(this.partido.equipo_visita!).subscribe(res => {
      this.partido.equipo_visita_obj = res;
    });
    this.ligaService.getArbitro(this.partido.arbitro!).subscribe(res => {
      this.partido.arbitro_obj = res;
    });
    this.ligaService.getCancha(this.partido.cancha!).subscribe(res => {
      this.partido.cancha_obj = res;
    });
  }

}
