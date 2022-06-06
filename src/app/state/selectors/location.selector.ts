import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LocationState } from '../../core/models/locations/location.state';

export const getLoadingState =
  createFeatureSelector<LocationState>('locations');

export const selectLoading = createSelector(
  getLoadingState,
  (state: LocationState) => state.loading
);

export const selectLocations = createSelector(
  getLoadingState,
  (state: LocationState) => ({
    info: state.info,
    locations: state.locations,
  })
);
export const selectLocation = createSelector(
  getLoadingState,
  (state: LocationState) => ({ location: state.location })
);
