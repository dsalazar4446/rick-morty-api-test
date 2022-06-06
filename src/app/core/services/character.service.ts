import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { CharactersResponse } from '../models/characters/characters-response.model';
import { Character } from '../models/characters/character.interface';
import { CharacterParams } from '../models/characters/character-params.interface';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private path: string;
  constructor(private http: HttpClient, private utilsService: UtilsService) {
    this.path = `${environment.baseUrl}/character`;
  }

  list(page: number = 1): Observable<CharactersResponse> {
    return this.http.get<CharactersResponse>(`${this.path}?page=${page}`);
  }



  detail(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.path}/${id}`);
  }

  multiple(ids: string): Observable<Array<Character>> {
    return this.http.get<Array<Character>>(`${this.path}/${ids}`);
  }

  filter(params: CharacterParams | any): Observable<Array<Character>> {
    let queryParams = this.utilsService.getPathParams(params);
    return this.http.get<Array<Character>>(`${this.path}/?${queryParams}`);
  }
}
