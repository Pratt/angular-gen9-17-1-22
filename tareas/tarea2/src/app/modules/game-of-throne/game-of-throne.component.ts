import { Component, OnInit } from '@angular/core';
import { GameOfThroneService } from "../../services/game-of-throne.service";

@Component({
  selector: 'app-game-of-throne',
  templateUrl: './game-of-throne.component.html',
  styleUrls: ['./game-of-throne.component.css']
})
export class GameOfThroneComponent implements OnInit {

  characters: any;

  constructor(
    private gotService: GameOfThroneService
  ) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.gotService.getCharacters().subscribe(response => {
      this.characters = response;
      console.log(response);
    });
  }

}
