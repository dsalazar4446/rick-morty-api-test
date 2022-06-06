import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EpisodeState } from '../../core/models/episodes/episode.state';

export const getLoadingState =
  createFeatureSelector<EpisodeState>('episodes');

export const selectLoading = createSelector(
  getLoadingState,
  (state: EpisodeState) => state.loading
);

export const selectEpisodes = createSelector(
  getLoadingState,
  (state: EpisodeState) => ({
    info: state.info,
    episodes: state.episodes,
  })
);
export const selectEpisode = createSelector(
  getLoadingState,
  (state: EpisodeState) => ({ episode: state.episode })
);
