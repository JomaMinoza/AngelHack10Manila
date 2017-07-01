import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { VehiclePage } from '../vehicle/vehicle';
import { VehicleInfoPage } from '../vehicle-info/vehicle-info';

import { ProfilePage } from '../profile/profile';

import { TripPage } from '../trip/trip';
import { PaymentPage } from '../payment/payment';

import { PassengerPage } from '../passenger/passenger';
import { StationPage } from '../station/station';

import { MainPage } from '../main/main';

/**
 * Generated class for the HistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  profilePage = ProfilePage;
  vehiclePage = VehiclePage;
  vehicleInfoPage = VehicleInfoPage;

  tripPage = TripPage;
  paymentPage = PaymentPage;
  
  passengerPage = PassengerPage;
  stationPage = StationPage;

  mainPage = MainPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

}
