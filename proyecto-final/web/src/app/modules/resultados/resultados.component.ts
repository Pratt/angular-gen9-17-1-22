import { Component, OnInit } from '@angular/core';
import { Partidos } from 'src/app/model/partidos.model';
import { LigaDeportivaService } from 'src/app/services/liga-deportiva.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  rondas: number[] = [];
  partidos: Partidos[] = [];

  constructor(
    private ligaService: LigaDeportivaService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.ligaService.getRondas().subscribe(res => {
      console.log(res);
      this.rondas = res;
      this.mostrarPartidos(res[0]);
    });
  }

  mostrarPartidos(ronda: any) {
    this.ligaService.getPartidos(ronda).subscribe(res => {
      this.partidos = res;
    });
  }

}
