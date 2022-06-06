import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  getPathParams(params: any) {
    let queryParams = '';
    const keys = Object.keys(params);
    keys.forEach((key) => {
      queryParams = queryParams.concat(
        `${key}=${params[`${key}`]}${key === keys.pop() ? '' : '&'}`
      );
    });
    return queryParams
  }

}
