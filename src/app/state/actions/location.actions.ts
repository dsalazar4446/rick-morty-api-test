import { createAction, props } from '@ngrx/store';
import { LocationResponce } from '../../core/models/locations/location-response';
import { Location } from '../../core/models/locations/location.interface';

export const loadListLocation = createAction(
  '[Locations Component, List Locations Component] Load List Locations',
  props<{ page: number }>()
);

export const loadedListLocation = createAction(
  '[Locations Component, List Locations Component] Load List Success',
  props<{ response: LocationResponce }>()
);

export const loadLocation = createAction(
  '[Locations Component,  Character Locations Component] Load Characters Locations',
  props<{ id: number }>()
);

export const detailLocation = createAction(
  '[Locations Component, Character Locations Component]] Load Character Locations Success',
  props<{ response: Location }>()
);
