import { Info } from "../common/info.interface";
import { Location } from "./location.interface";

export interface LocationResponce {
  info?: Info,
  results?: Array<Location>
}
