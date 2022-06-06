import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SearchbarState } from "../../core/models/searchbar/searchbar.state";

export const getLoadingState =
  createFeatureSelector<SearchbarState>('searchbar');

export const selectChange = createSelector(
  getLoadingState,
  (state:SearchbarState) => state.value
);
