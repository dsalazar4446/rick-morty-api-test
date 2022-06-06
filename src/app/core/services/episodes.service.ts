import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { EpisodeParams } from '../models/episodes/episode-params.interface';
import { Episode } from '../models/episodes/episode.interface';
import { EpisodesResponse } from '../models/episodes/episodes-response';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  private path: string;
  constructor(private http: HttpClient, private utilsService: UtilsService) {
    this.path = `${environment.baseUrl}/episode`;
  }

  list(page: number = 1): Observable<EpisodesResponse> {
    return this.http.get<EpisodesResponse>(`${this.path}?page=${page}`);
  }

  detail(id: number): Observable<Episode> {
    return this.http.get<Episode>(`${this.path}/${id}`);
  }

  multiple(ids: Array<number>): Observable<Array<Episode>> {
    return this.http.get<Array<Episode>>(`${this.path}/${ids.join(',')}`);
  }

  filter(params: EpisodeParams | any): Observable<Array<Episode>> {
    let queryParams = this.utilsService.getPathParams(params);

    return this.http.get<Array<Episode>>(`${this.path}/?${queryParams}`);
  }
}
