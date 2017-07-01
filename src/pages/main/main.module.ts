import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainPage } from './main';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, CameraPosition } from '@ionic-native/google-maps';

@NgModule({
  declarations: [
    MainPage,
  ],
  imports: [
    IonicPageModule.forChild(MainPage),
  ],
  exports: [
    MainPage
  ]
})
export class MainPageModule {}
