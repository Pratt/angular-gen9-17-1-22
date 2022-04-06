import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipo } from 'src/app/model/equipo.model';

@Component({
  selector: 'app-card-equipo',
  templateUrl: './card-equipo.component.html',
  styleUrls: ['./card-equipo.component.css']
})
export class CardEquipoComponent implements OnInit {

  @Input() equipo: Equipo = { id: 0, nombre: '', logo: '', fecha_afiliacion: null, capitan: 0, descripcion: '', email_contacto: '', telefono_contacto: '' };

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  verEquipo(id: number) {
    this.router.navigate(['/equipo', id]);
  }

}
