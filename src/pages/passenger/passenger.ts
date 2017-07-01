import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VehiclePage } from '../vehicle/vehicle';
import { VehicleInfoPage } from '../vehicle-info/vehicle-info';

import { ProfilePage } from '../profile/profile';

import { TripPage } from '../trip/trip';
import { HistoryPage } from '../history/history';
import { PaymentPage } from '../payment/payment';

import { StationPage } from '../station/station';

import { MainPage } from '../main/main';

/**
 * Generated class for the PassengerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-passenger',
  templateUrl: 'passenger.html',
})
export class PassengerPage {
  profilePage = ProfilePage;
  vehiclePage = VehiclePage;
  vehicleInfoPage = VehicleInfoPage;

  tripPage = TripPage;
  historyPage = HistoryPage;
  paymentPage = PaymentPage;
  
  stationPage = StationPage;

  mainPage = MainPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PassengerPage');
  }

}
