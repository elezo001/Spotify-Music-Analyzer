import { Injectable } from '@angular/core';
import { Track } from '../../../Tracks';

@Injectable()
export class TrackArrayService{
  public trackList: Track[];

  constructor(){
    this.trackList = [];
  }

  getLength(){
    return this.trackList.length;
  }

  getTrack(index: number){
    return this.trackList[index];
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

  deleteTrack(track:any, index: number){
    this.trackList.splice(index, 1);
  }

}
