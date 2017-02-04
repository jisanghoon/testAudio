import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AudioProvider } from '../../app/ionic-audio/ionic-audio.module';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  singleTrack: any;
  allTracks: any[];
  selectedTrack: number;

  constructor(public navCtrl: NavController, private _audioProvider: AudioProvider) {
    // plugin won't preload data by default, unless preload property is defined within json object - defaults to 'none'
   
    
    this.singleTrack = {
      src: 'http://192.168.0.16/1.mp3',
      artist: 'Stephane Wrembel',
      title: 'Stephane Wrembel Live',
      art: 'assets/img/Stephane.jpg',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
    };

  }

  ngAfterContentInit() {     
    // get all tracks managed by AudioProvider so we can control playback via the API
    this.allTracks = this._audioProvider.tracks; 
  }
  
  playSelectedTrack() {
    // use AudioProvider to control selected track 
    this._audioProvider.play(this.selectedTrack);
  }
  
  pauseSelectedTrack() {
     // use AudioProvider to control selected track 
     this._audioProvider.pause(this.selectedTrack);
  }
         
  onTrackFinished(track: any) {
    console.log('Track finished', track)
  }

}