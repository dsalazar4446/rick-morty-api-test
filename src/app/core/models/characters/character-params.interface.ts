import { CharacterGender } from "../../enums/characters/character-gender.enum";
import { CharacterStatus } from "../../enums/characters/character-status.enum";

export interface CharacterParams {
  name?: string;
  status?: CharacterStatus;
  type?: string;
  gender?: CharacterGender
}
