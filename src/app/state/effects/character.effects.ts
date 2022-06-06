import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CharacterService } from '../../core/services/character.service';
import { detailCharacter, loadCharacter, loadedListCharacter, loadListCharacters, loadMultipleCharacter, multipleCharacter } from '../actions/chararacter.actions';

@Injectable()
export class CharactersEffects {
  loadCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadListCharacters),
      map((action) => action.page),
      mergeMap((page) =>
        this.characterService.list(page).pipe(
          map((response) => loadedListCharacter({ response })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadCharacter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCharacter),
      map((action) => action.id),
      mergeMap((id) =>
        this.characterService.detail(id).pipe(
          map((response) => detailCharacter({ response })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadMultipleCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMultipleCharacter),
      map((action) => action.ids),
      mergeMap((ids) =>
        this.characterService.multiple(ids).pipe(
          map((response) => multipleCharacter({ response })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private characterService: CharacterService
  ) {}
}
