import { ActionReducerMap } from "@ngrx/store";
import { characterReducer } from "../../state/reducers/characters.reducer";
import { episodeReducer } from "../../state/reducers/episodes.reducer";
import { locationReducer } from "../../state/reducers/location.reducer";
import { menuReducer } from "../../state/reducers/menu.reducer";
import { searchbarReducer } from "../../state/reducers/searchbar.reducer";
import { CharacterState } from "./characters/character.state";
import { EpisodeState } from "./episodes/episode.state";
import { LocationState } from "./locations/location.state";
import { MenuState } from "./menu/menu.state";
import { SearchbarState } from "./searchbar/searchbar.state";

export interface AppState {
  characters: CharacterState
  menu: MenuState,
  locations: LocationState,
  episodes: EpisodeState,
  searchbar: SearchbarState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  characters: characterReducer,
  menu: menuReducer,
  locations: locationReducer,
  episodes: episodeReducer,
  searchbar: searchbarReducer
};
