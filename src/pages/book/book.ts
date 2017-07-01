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

import { MainPage } from '../main/main';

/**
 * Generated class for the BookPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {

  profilePage = ProfilePage;
  vehiclePage = VehiclePage;
  vehicleInfoPage = VehicleInfoPage;

  tripPage = TripPage;
  historyPage = HistoryPage;
  paymentPage = PaymentPage;
  
  passengerPage = PassengerPage;
  stationPage = StationPage;

  mainPage = MainPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookPage');
  }

}
