import { Info } from "../common/info.interface";
import { Episode } from "./episode.interface";

export interface EpisodesResponse {
  info?: Info,
  results?: Array<Episode>
}
