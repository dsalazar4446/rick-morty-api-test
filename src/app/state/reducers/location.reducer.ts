import { createReducer, on } from '@ngrx/store';
import { LocationState } from '../../core/models/locations/location.state';
import * as LocationPageActions from '../actions/location.actions';

export const initialState: LocationState = {
  loading: false,
  info: {},
  locations: [],
  location: {},
};

export const locationReducer = createReducer(
  initialState,
  on(LocationPageActions.loadListLocation, (state) => ({
    ...state,
    loading: true,
  })),
  on(LocationPageActions.loadedListLocation, (state, { response }) => ({
    ...state,
    loading: false,
    info: response.info,
    locations: response.results,
  })),
  on(LocationPageActions.loadLocation, (state) => ({
    ...state,
    loading: true,
  })),
  on(LocationPageActions.detailLocation, (state, { response }) => ({
    ...state,
    loading: false,
    location: response,
  }))
);
