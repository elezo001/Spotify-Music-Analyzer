import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { TrackArrayService } from './services/tracks.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { TrackComponent } from './components/track/track.component';
import { AboutComponent } from './components/about/about.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { PageNotFoundComponent } from './components/PageNotFound/pagenotfound.component';

import { Track } from '../../Tracks';
import { Album } from '../../Albums';
import { AudioFeatures } from '../../AudioFeatures';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'analytics', component: AnalyticsComponent},
  { path: 'track/:id', component: TrackComponent},
  { path: '', component: SearchComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, AboutComponent, SearchComponent, TrackComponent, AnalyticsComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [TrackArrayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
