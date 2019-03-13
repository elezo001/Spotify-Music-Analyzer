import {Album} from './Albums';
import {AudioFeatures} from './AudioFeatures';
import { Artist } from './Artist';

export class Track{
  id: number;
  name: string;
  artist: Artist;
  audioFeatures: AudioFeatures;
  genre: string;
}
