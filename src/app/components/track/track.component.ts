import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';
import { Track } from '../../../../Tracks';

@Component({
  moduleId: module.id,
  selector: 'track',
  templateUrl: 'track.component.html',
  providers: [SpotifyService]
})
export class TrackComponent implements OnInit {

  id:string;
  track: Track[];

  constructor(private _spotifyService: SpotifyService, private _route:ActivatedRoute){

  }


  ngOnInit(){
    this._route.params
      .map(params => params['id'])
      .subscribe((id => {
        this._spotifyService.getToken().subscribe(res => {this._spotifyService.getTrack(id, res.access_token)
          .subscribe(track => {
            this.track = track;
          })
      })
  }))
}
}
