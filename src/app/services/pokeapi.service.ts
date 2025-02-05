import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private baseUrl = 'https:/pokeapi.co/api/v2';

  constructor(private httpClient: HttpClient) { }


  getPokemon(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/pokemon/${id}`);
  }

  getRandomId(min: number, max:number): number {
    return Math.floor(Math.random() * (max-min+1)) + min
  }
}
