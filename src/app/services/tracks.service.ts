import { Injectable } from '@angular/core';
import { Track } from '../../../Tracks';

@Injectable()
export class TrackArrayService{
  public trackList: Track[] = [];

  constructor(){
  }

  getLength(){
    return this.trackList.length;
  }

  consoleLogTracks(){
    this.trackList.forEach(track => {
      console.log(track.name);
    });
  }

  addToList(track: any){
    this.trackList.push(track);
  }

  getTrackList(){
    return this.trackList;
  }

}
