import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameOfThroneService {

  private urlCharacters: string = 'https://thronesapi.com/api/v2/Characters';

  constructor(
    private http: HttpClient
  ) { }

  getCharacters(): Observable<any> {
    return this.http.get(this.urlCharacters);
  }

}
