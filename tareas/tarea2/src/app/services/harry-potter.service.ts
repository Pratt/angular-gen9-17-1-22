import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HarryPotterService {

  private urlCharactersByHouse: string = 'http://hp-api.herokuapp.com/api/characters/house/';

  constructor(
    private http: HttpClient
  ) { }

  getCharactersByHouse(house: string): Observable<any> {
    let url = this.urlCharactersByHouse + house;
    console.log(url);
    return this.http.get(url);
  }

}
