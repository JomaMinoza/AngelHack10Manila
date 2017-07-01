import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';

import { HistoryPage } from '../pages/history/history';
import { BookPage } from '../pages/book/book';
import { MainPage } from '../pages/main/main';
import { PassengerPage } from '../pages/passenger/passenger';
import { PaymentPage } from '../pages/payment/payment';
import { ProfilePage } from '../pages/profile/profile';
import { StationPage } from '../pages/station/station';
import { TripPage } from '../pages/trip/trip';
import { VehiclePage } from '../pages/vehicle/vehicle';
import { VehicleInfoPage } from '../pages/vehicle-info/vehicle-info';
import { SplashPage } from '../pages/splash/splash';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SplashPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

