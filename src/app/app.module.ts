import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule} from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IonicAudioModule, AudioProvider, audioProviderfactory } from './ionic-audio/ionic-audio.module';
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicAudioModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: AudioProvider, useFactory: audioProviderfactory}],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
