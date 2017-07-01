import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VehiclePage } from '../vehicle/vehicle';
import { VehicleInfoPage } from '../vehicle-info/vehicle-info';

import { ProfilePage } from '../profile/profile';

import { HistoryPage } from '../history/history';
import { PaymentPage } from '../payment/payment';

import { PassengerPage } from '../passenger/passenger';
import { StationPage } from '../station/station';

import { MainPage } from '../main/main';

/**
 * Generated class for the TripPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-trip',
  templateUrl: 'trip.html',
})
export class TripPage {

  profilePage = ProfilePage;
  vehiclePage = VehiclePage;
  vehicleInfoPage = VehicleInfoPage;

  historyPage = HistoryPage;
  paymentPage = PaymentPage;
  
  passengerPage = PassengerPage;
  stationPage = StationPage;

  mainPage = MainPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TripPage');
  }

}
