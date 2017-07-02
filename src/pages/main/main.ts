import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { VehiclePage } from '../vehicle/vehicle';
import { VehicleInfoPage } from '../vehicle-info/vehicle-info';

import { ProfilePage } from '../profile/profile';

import { TripPage } from '../trip/trip';
import { HistoryPage } from '../history/history';
import { PaymentPage } from '../payment/payment';

import { PassengerPage } from '../passenger/passenger';
import { StationPage } from '../station/station';

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


  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
   
  }
  ngAfterViewInit() {
    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }
}
