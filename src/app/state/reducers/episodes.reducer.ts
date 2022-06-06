import { createReducer, on } from '@ngrx/store';
import { EpisodeState } from '../../core/models/episodes/episode.state';
import * as EpisodePageActions from '../actions/episode.actions';

export const initialState: EpisodeState = {
  loading: false,
  info: {},
  episodes: [],
  episode: {},
};

export const episodeReducer = createReducer(
  initialState,
  on(EpisodePageActions.loadListEpisode, (state) => ({
    ...state,
    loading: true,
  })),
  on(EpisodePageActions.loadedListEpisode, (state, { response }) => ({
    ...state,
    loading: false,
    info: response.info,
    episodes: response.results,
  })),
  on(EpisodePageActions.loadEpisode, (state) => ({
    ...state,
    loading: true,
  })),
  on(EpisodePageActions.detailEpisode, (state, { response }) => ({
    ...state,
    loading: false,
    episode: response,
  }))
);
