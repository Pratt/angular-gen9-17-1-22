import { Component, OnInit } from '@angular/core';
import { Clasificacion } from 'src/app/model/clasificacion.model';
import { LigaDeportivaService } from 'src/app/services/liga-deportiva.service';

@Component({
  selector: 'app-clasificacion',
  templateUrl: './clasificacion.component.html',
  styleUrls: ['./clasificacion.component.css']
})
export class ClasificacionComponent implements OnInit {

  clasificacion: Clasificacion[] = [];

  constructor(
    private ligaService: LigaDeportivaService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.ligaService.getClasificacion().subscribe(res => {
      this.clasificacion = res;
      for (let c of this.clasificacion) {
        this.ligaService.getEquipo(c.equipo!).subscribe(r => {
          c.equipo_obj = r;
        });
      }
    });
  };

}
