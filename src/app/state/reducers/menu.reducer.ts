import { createReducer, on } from "@ngrx/store";
import { MenuState } from "../../core/models/menu/menu.state";
import * as MenuActions from '../actions/menu.actions'
export const initialState: MenuState = {
  isOpen: false,
};

export const menuReducer = createReducer(
  initialState,
  on(MenuActions.openMenu,(state) => ({...state, isOpen: true})),
  on(MenuActions.closedMenu,(state) => ({...state, isOpen: false}))
)
