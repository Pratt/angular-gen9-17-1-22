import { Component, Input, OnInit } from '@angular/core';
import { LigaDeportivaService } from "../../services/liga-deportiva.service";
import { Equipo } from "../../model/equipo.model";

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  equipos: Equipo[] = [];
  @Input() cantidad?: number;

  constructor(
    private ligaService: LigaDeportivaService
  ) { }

  ngOnInit(): void {
    this.getEquipos();
  }

  getEquipos() {
    this.ligaService.getEquipos().subscribe(res => {
      if (this.cantidad) {
        let r = res.sort(() => 0.5 - Math.random());
        res = r.slice(0, this.cantidad);
      }
      this.equipos = res;
    });
  };

}
