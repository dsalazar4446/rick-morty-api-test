import { createAction, props } from '@ngrx/store';
import { Character } from '../../core/models/characters/character.interface';
import { CharactersResponse } from '../../core/models/characters/characters-response.model';

export const loadListCharacters = createAction(
  '[Character Component, List Character Component] Load List Characters',
  props<{page: number}>()
);

export const loadedListCharacter = createAction(
  '[Character Component, List Character Component] Load List Success',
  props<{ response: CharactersResponse }>()
);

export const loadCharacter = createAction(
  '[Character Component, Detail Character Component] Load Characters',
  props<{ id: number }>()
);

export const detailCharacter = createAction(
  '[Character Component,Detail Character Component] Load Character Success',
  props<{ response: Character }>()
);

export const loadMultipleCharacter = createAction(
  '[List Episode Component, Load Multiple Character Component] Load Multiple Characters',
  props<{ ids: string }>()
);

export const multipleCharacter = createAction(
  '[List Episode  Component] Load Multiple Character Success',
  props<{ response: Array<Character> }>()
);
