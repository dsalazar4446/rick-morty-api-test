import { createAction, props } from '@ngrx/store';

export const changeSearchbar = createAction(
  '[Searchbar Component] Change Search',
  props<{ value: string }>()
);
