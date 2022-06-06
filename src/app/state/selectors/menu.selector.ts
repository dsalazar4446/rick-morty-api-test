import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MenuState } from '../../core/models/menu/menu.state';

export const getMenuState =
  createFeatureSelector<MenuState>('menu');

export const selectOpenMenu = createSelector(
  getMenuState,
  (state: MenuState) => ({
    isOpen: state.isOpen,
  })
);

export const selectCloseMenu = createSelector(
  getMenuState,
  (state: MenuState) => ({
    isOpen: state.isOpen,
  })
);

