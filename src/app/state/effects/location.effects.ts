import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LocationsService } from '../../core/services/locations.service';
import { detailLocation, loadedListLocation, loadListLocation, loadLocation } from '../actions/location.actions';

@Injectable()
export class LocationEffects {
  loadEpisodes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadListLocation),
      map((action) => action.page),
      mergeMap((page) =>
        this.locationService.list(page).pipe(
          map((response) => loadedListLocation({ response })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadEpisode$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadLocation),
      map((action) => action.id),
      mergeMap((id) =>
        this.locationService.detail(id).pipe(
          map((response) => detailLocation({ response })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private locationService: LocationsService
  ) {}
}
