import { Component, OnInit } from '@angular/core';
import { HarryPotterService } from "../../services/harry-potter.service";

@Component({
  selector: 'app-harry-potter',
  templateUrl: './harry-potter.component.html',
  styleUrls: ['./harry-potter.component.css']
})
export class HarryPotterComponent implements OnInit {

  characters: any;

  constructor(
    private hpService: HarryPotterService
  ) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(house: string = 'gryffindor') {
    this.hpService.getCharactersByHouse(house).subscribe(response => {
      this.characters = response;
      console.log(response);
    });
  }

}
