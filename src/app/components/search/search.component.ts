import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import { Track } from '../../../../Tracks';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
  providers:[SpotifyService]
})
export class SearchComponent {
  searchString: string;
  searchResults: Track[];

  constructor(private _spotifyService: SpotifyService){

  }

  searchMusic(){
    this._spotifyService.getToken().subscribe(res => {this._spotifyService.searchMusic(this.searchString, 'track', res.access_token).subscribe(res => {
      this.searchResults = (res.tracks.items);
    })
  })
}
}
