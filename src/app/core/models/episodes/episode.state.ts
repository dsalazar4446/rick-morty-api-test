import { Info } from '../common/info.interface';
import { Episode } from './episode.interface';

export interface EpisodeState {
  loading?: boolean;
  info?: Info;
  episodes?: Array<Episode>;
  episode?: Episode;
}
