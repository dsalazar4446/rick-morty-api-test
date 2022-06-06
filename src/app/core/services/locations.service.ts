import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LocationParams } from '../models/locations/location-params.interface';
import { LocationResponce } from '../models/locations/location-response';
import { Location } from '../models/locations/location.interface';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  private path: string;
  constructor(private http: HttpClient, private utilsService: UtilsService) {
    this.path = `${environment.baseUrl}/location`;
  }

  list(page: number = 1): Observable<LocationResponce> {
    return this.http.get<LocationResponce>(`${this.path}?page=${page}`);
  }

  detail(id: number): Observable<Location> {
    return this.http.get<Location>(`${this.path}/${id}`);
  }

  multiple(ids: Array<number>): Observable<Array<Location>> {
    return this.http.get<Array<Location>>(`${this.path}/${ids.join(',')}`);
  }

  filter(params: LocationParams | any): Observable<Array<Location>> {
    let queryParams = this.utilsService.getPathParams(params);

    return this.http.get<Array<Location>>(`${this.path}/?${queryParams}`);
  }
}
