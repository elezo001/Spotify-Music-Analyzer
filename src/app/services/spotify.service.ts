import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
  private trackUrl: string;
  private audioFeaturesUrl: string;

  private searchUrl: string;
  private access_token: string;
  private client_id = 'ea90c27b2b7f4d80a9813b4362b0be18'; // Your client id
  private client_secret = '190293a6ab8e44b5a6a266ce47e8ab84'; // Your secret
  private encoded = btoa(this.client_id + ':' + this.client_secret);

  constructor(private _http:Http){

  }

  getAudioFeatures(id: string, token:string){
    this.audioFeaturesUrl = 'https://api.spotify.com/v1/audio-features/' +id;
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + token);
    return this._http.get(this.audioFeaturesUrl, {headers: headers}).map(res => res.json());
  }

  getTrack(id: string, token: string){
    this.trackUrl = 'https://api.spotify.com/v1/tracks/' +id;
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + token);
    return this._http.get(this.trackUrl, {headers: headers}).map(res => res.json());
  }

  getToken(){
    let params = ('grant_type=client_credentials');
    let client_id = 'ea90c27b2b7f4d80a9813b4362b0be18'; // Your client id
    let client_secret = '190293a6ab8e44b5a6a266ce47e8ab84'; // Your secret
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + this.encoded);
    headers.append('Content-Type' , 'application/x-www-form-urlencoded');
    let url = 'https://accounts.spotify.com/api/token';

    return this._http.post(url, params, {headers : headers})
      .map(res => res.json());
  }

  searchMusic(str: string, type='track', token:string){
    this.searchUrl = 'https://api.spotify.com/v1/search?q=' +str+ '&offset=0&limit=10&type='+type+ '&market=US';
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + token);
    return this._http.get(this.searchUrl, {headers: headers}).map(res => res.json());
  }
}
