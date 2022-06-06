import { createAction, props } from '@ngrx/store';
import { Episode } from '../../core/models/episodes/episode.interface';
import { EpisodesResponse } from '../../core/models/episodes/episodes-response';

export const loadListEpisode = createAction(
  '[Episodes Component, List Episodes Component] Load List Episodes',
  props<{ page: number }>()
);

export const loadedListEpisode = createAction(
  '[Episodes Component, List Episodes Component] Load List Success',
  props<{ response: EpisodesResponse }>()
);

export const loadEpisode = createAction(
  '[Episodes Component,  Character Episodes Component] Load Characters',
  props<{ id: number }>()
);

export const detailEpisode = createAction(
  '[Episodes Component, Character Episodes Component]] Load Character Success',
  props<{ response: Episode }>()
);
