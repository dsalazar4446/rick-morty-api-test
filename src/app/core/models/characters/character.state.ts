import { Info } from "../common/info.interface";
import { Character } from "./character.interface";

export interface CharacterState {
  loading?: boolean;
  info?: Info;
  characters?: Array<Character>
  character?: Character
}
