import { createReducer, on } from "@ngrx/store";
import { SearchbarState } from "../../core/models/searchbar/searchbar.state";
import * as SearchbarPageActions from '../actions/searchbar.action';

export const initialState: SearchbarState = {
  value: ''
};

export const searchbarReducer = createReducer(
  initialState,
  on(SearchbarPageActions.changeSearchbar,(state, {value})=>({...state, value}))
)
