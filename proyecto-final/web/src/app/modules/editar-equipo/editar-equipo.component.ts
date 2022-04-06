import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipo } from 'src/app/model/equipo.model';
import { Jugador } from 'src/app/model/jugador.model';
import { LigaDeportivaService } from 'src/app/services/liga-deportiva.service';

@Component({
  selector: 'app-editar-equipo',
  templateUrl: './editar-equipo.component.html',
  styleUrls: ['./editar-equipo.component.css']
})
export class EditarEquipoComponent implements OnInit {

  equipo: Equipo = { id: 0, nombre: '', logo: '', fecha_afiliacion: null, capitan: 0, descripcion: '', email_contacto: '', telefono_contacto: '' };
  form1: FormGroup;
  jugadores: Jugador[] = [];

  constructor(
    private ligaService: LigaDeportivaService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {

    this.form1 = this.formBuilder.group({});
    this.crearForm();

    this.activatedRoute.params.subscribe(params => {

      this.ligaService.getEquipo(params['id']).subscribe(res => {
        this.equipo = res;
        this.actualizarForm();
      });

      this.ligaService.getJugadoresPorEquipo(params['id']).subscribe(res => {
        this.jugadores = res;
      });

    });

  }

  ngOnInit(): void {
  }

  crearForm() {
    this.form1 = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      fecha_afiliacion: [''],
      capitan: [''],
      descripcion: ['', Validators.minLength(5)],
      email_contacto: ['', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      telefono_contacto: ['', Validators.minLength(8)]
    });
  }

  actualizarForm() {
    this.form1.patchValue({
      nombre: this.equipo.nombre,
      fecha_afiliacion: this.equipo.fecha_afiliacion,
      capitan: this.equipo.capitan,
      descripcion: this.equipo.descripcion,
      email_contacto: this.equipo.email_contacto,
      telefono_contacto: this.equipo.telefono_contacto
    });
  }

  guardar() {

    let equipoMod: Equipo = {
      id: this.equipo.id,
      nombre: this.form1.get('nombre')?.value,
      logo: '',
      fecha_afiliacion: this.form1.get('fecha_afiliacion')?.value,
      capitan: this.form1.get('capitan')?.value,
      descripcion: this.form1.get('descripcion')?.value,
      email_contacto: this.form1.get('email_contacto')?.value,
      telefono_contacto: this.form1.get('telefono_contacto')?.value
    }

    if (this.form1.invalid) {
      alert('Complete los campos');
    } else {
      this.ligaService.updateEquipo(equipoMod).subscribe(res => {
        console.log(res);
        alert('OK');
        this.router.navigate(['/equipo', this.equipo.id]);
      });
    }

  }

}
