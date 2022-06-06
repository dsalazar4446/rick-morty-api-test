import { Info } from '../common/info.interface';
import { Location } from './location.interface';

export interface LocationState {
  loading?: boolean;
  info?: Info;
  locations?: Array<Location>;
  location?: Location;
}
