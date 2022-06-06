import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { EpisodesService } from '../../core/services/episodes.service';
import { detailEpisode, loadedListEpisode, loadEpisode, loadListEpisode } from '../actions/episode.actions';

@Injectable()
export class EpisodeEffects {
  loadEpisodes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadListEpisode),
      map((action) => action.page),
      mergeMap((page) =>
        this.episodeService.list(page).pipe(
          map((response) => loadedListEpisode({ response })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadEpisode$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadEpisode),
      map((action) => action.id),
      mergeMap((id) =>
        this.episodeService.detail(id).pipe(
          map((response) => detailEpisode({ response })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private episodeService: EpisodesService
  ) {}
}
