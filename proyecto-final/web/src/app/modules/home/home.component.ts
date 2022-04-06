import { Component, OnInit } from '@angular/core';
import { LigaDeportivaService } from 'src/app/services/liga-deportiva.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fraseDelDia: string = '';

  constructor(
    private ligaService: LigaDeportivaService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.ligaService.getFraseDelDia().subscribe(res => {
      this.fraseDelDia = res.frase;
    });
  }

}
