import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VehiclePage } from '../vehicle/vehicle';
import { VehicleInfoPage } from '../vehicle-info/vehicle-info';

import { ProfilePage } from '../profile/profile';

import { TripPage } from '../trip/trip';
import { HistoryPage } from '../history/history';
import { PaymentPage } from '../payment/payment';

import { PassengerPage } from '../passenger/passenger';
import { StationPage } from '../station/station';

import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, CameraPosition } from '@ionic-native/google-maps';

declare var google: any;

/**
 * Generated class for the MainPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  profilePage = ProfilePage;
  vehiclePage = VehiclePage;
  vehicleInfoPage = VehicleInfoPage;

  tripPage = TripPage;
  historyPage = HistoryPage;
  paymentPage = PaymentPage;
  
  passengerPage = PassengerPage;
  stationPage = StationPage;
  
  constructor(private googleMaps: GoogleMaps, public navCtrl: NavController, public navParams: NavParams) {
  }
  ngAfterViewInit() {
    this.loadMap();
  }
  loadMap() {
    let element: HTMLElement = document.getElementById('map');

    let map: GoogleMap = this.googleMaps.create(element);
    map.one(GoogleMapsEvent.MAP_READY).then(() => console.log('Map is ready!'));

    let ionic: LatLng = new LatLng(43.0741904, -89.3809802);

    let position: CameraPosition = {
      target: ionic,
      zoom: 18,
      tilt: 30
    };

    map.moveCamera(position);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

}
