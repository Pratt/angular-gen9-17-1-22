import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from "../games/games.component";
import { Router } from "@angular/router"
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() dataInput:Game = {name:"",description:"",platform:"",img:""};
  @Input() indexInput: number =0;
  @Output() selectGame: EventEmitter<any>;


  constructor(private router:Router, private gamesService : GamesService) { 
    this.selectGame = new EventEmitter();
  }

  ngOnInit(): void {
  }

  buyGame(){
    console.log(this.indexInput);
    this.selectGame.emit(this.indexInput);
  }

  detailGame(index:any){
    this.router.navigate(['/game', index])
  }

  deleteGame(index:any){
    if(confirm('¿Desea borrar este juego?')){
      this.gamesService.deleteGame(index).subscribe(resp =>{
        let data:any = resp;
        let mensaje = data.mensaje;
        console.log(resp);
        document.location.reload();
      });
    }
  }

}
