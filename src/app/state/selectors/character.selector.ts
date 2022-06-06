import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CharacterState } from '../../core/models/characters/character.state';

export const getLoadingState = createFeatureSelector<CharacterState>('characters')

export const selectLoading = createSelector(
  getLoadingState,
  (state: CharacterState) => state.loading
);

export const selectCharacters = createSelector(
  getLoadingState,
  (state: CharacterState) => ({info: state.info, characters: state.characters})
);
export const selectCharacter = createSelector(
  getLoadingState,
  (state: CharacterState) => ({character: state.character})
);

export const selectMultipleCharacter = createSelector(
  getLoadingState,
  (state: CharacterState) => ({ characters: state.characters })
);
