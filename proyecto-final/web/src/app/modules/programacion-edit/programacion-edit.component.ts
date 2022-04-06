import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Arbitro } from 'src/app/model/arbitro.model';
import { Cancha } from 'src/app/model/cancha.model';
import { Equipo } from 'src/app/model/equipo.model';
import { ProgramacionPartidos } from 'src/app/model/programacion-partidos.model';
import { LigaDeportivaService } from 'src/app/services/liga-deportiva.service';

@Component({
  selector: 'app-programacion-edit',
  templateUrl: './programacion-edit.component.html',
  styleUrls: ['./programacion-edit.component.css']
})
export class ProgramacionEditComponent implements OnInit {

  programacion: ProgramacionPartidos = {};
  form1: FormGroup;
  equipos: Equipo[] = [];
  canchas: Cancha[] = [];
  arbitros: Arbitro[] = [];
  isAgregar: boolean;

  constructor(
    private ligaService: LigaDeportivaService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

    this.isAgregar = this.router.url.endsWith('/add');
    this.form1 = this.formBuilder.group({});
    this.crearForm();

    this.activatedRoute.params.subscribe(params => {

      if (!this.isAgregar) {
        this.ligaService.getProgramacion(params['id']).subscribe(res => {
          this.programacion = res;
          this.actualizarForm();
        });
      }

      this.ligaService.getEquipos().subscribe(res => {
        this.equipos = res;
      });

      this.ligaService.getCanchas().subscribe(res => {
        this.canchas = res;
      });

      this.ligaService.getArbitros().subscribe(res => {
        this.arbitros = res;
      });

    });

  }

  ngOnInit(): void {
  }

  crearForm() {
    this.form1 = this.formBuilder.group({
      equipo_local: ['', [Validators.required]],
      equipo_visita: ['', [Validators.required]],
      cancha: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      hora: ['', [Validators.required]],
      arbitro: ['', [Validators.required]]
    });
  }

  actualizarForm() {
    this.form1.patchValue({
      equipo_local: this.programacion.equipo_local,
      equipo_visita: this.programacion.equipo_visita,
      cancha: this.programacion.cancha,
      fecha: this.programacion.fecha_hora?.split(' ')[0],
      hora: this.programacion.fecha_hora?.split(' ')[1],
      arbitro: this.programacion.arbitro
    });
  }

  guardar() {

    if (this.form1.invalid) {
      alert('Complete los campos');
      return;
    }

    let prog: ProgramacionPartidos = {
      id: this.programacion.id,
      equipo_local: this.form1.get('equipo_local')?.value,
      equipo_visita: this.form1.get('equipo_visita')?.value,
      cancha: this.form1.get('cancha')?.value,
      fecha_hora: this.form1.get('fecha')?.value + ' ' + this.form1.get('hora')?.value,
      arbitro: this.form1.get('arbitro')?.value
    }

    if (prog.equipo_local == prog.equipo_visita) {
      alert('Equipo local y visita no puede ser el mismo equipo');
      return;
    }

    if (this.isAgregar) {
      this.ligaService.createProgramacion(prog).subscribe(res => {
        console.log(res);
        alert('OK');
        this.router.navigate(['/programacion-partidos']);
      });
    } else {
      this.ligaService.updateProgramacion(prog).subscribe(res => {
        console.log(res);
        alert('OK');
        this.router.navigate(['/programacion-partidos']);
      });
    }

  }

}
