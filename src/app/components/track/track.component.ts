import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { TrackArrayService } from '../../services/tracks.service';
import { ActivatedRoute } from '@angular/router';
import { Track } from '../../../../Tracks';
import { AudioFeatures } from '../../../../AudioFeatures';

@Component({
  moduleId: module.id,
  selector: 'track',
  templateUrl: 'track.component.html',
  providers: [SpotifyService]
})
export class TrackComponent implements OnInit {

  id:string;
  artistName: string;
  audioFeatures: AudioFeatures[] = [];
  tracks: Track[] = [];

  constructor(private _spotifyService: SpotifyService, private _route:ActivatedRoute, private _trackList:TrackArrayService){

  }

  ngOnInit(){

    this._route.params
      .map(params => params['id'])
      .subscribe((id => {
        this._spotifyService.getToken().subscribe(res => {this._spotifyService.getAudioFeatures(id, res.access_token)
          .subscribe(trackFeatures => {
            this.audioFeatures = trackFeatures;
          })
      })
  }))

  this._route.params
    .map(params => params['id'])
    .subscribe((id => {
      this._spotifyService.getToken().subscribe(res => {this._spotifyService.getTrack(id, res.access_token)
        .subscribe(trackResponse => {
          this._trackList.addToList({'id':trackResponse.id, 'name':trackResponse.name, 'artistName':trackResponse.artists[0].name});
          console.log(this._trackList.getLength());
          this.tracks = this._trackList.getTrackList();
        })
    })
}))

        console.log("After add to list length: " + this._trackList.getLength());

}

}
