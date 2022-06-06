import { Location } from "./location.interface";
import { Origin } from "./origin.interface";

export interface Character {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: Origin,
  location?: Location
  image?: string;
  episode?: Array<string>;
  url?: string;
  created?: Date
}
