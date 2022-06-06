
import { createReducer, on } from '@ngrx/store';
import { CharacterState } from '../../core/models/characters/character.state';
import * as CharacterPageActions from '../actions/chararacter.actions';

export const initialState: CharacterState  = {
  loading: false,
  info: {},
  characters: [],
  character: {}
}

export const characterReducer = createReducer(
  initialState,
  on(CharacterPageActions.loadListCharacters, (state) => ({
    ...state,
    loading: true,
  })),
  on(CharacterPageActions.loadedListCharacter, (state, { response }) => ({
    ...state,
    loading: false,
    info: response.info,
    characters: response.results,
  })),
  on(CharacterPageActions.loadCharacter, (state) => ({
    ...state,
    loading: true,
  })),
  on(CharacterPageActions.detailCharacter, (state, { response }) => ({
    ...state,
    loading: false,
    character: response,
  })),
  on(CharacterPageActions.loadMultipleCharacter, (state) => ({...state, loading: true})),
  on(CharacterPageActions.multipleCharacter, (state, {response}) => ({...state, loading: false, characters: response}))
);
