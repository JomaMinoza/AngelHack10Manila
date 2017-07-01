import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrationPage,
    HistoryPage,
    BookPage,
    MainPage,
    PassengerPage,
    PaymentPage,
    ProfilePage,
    StationPage,
    TripPage,
    VehiclePage,
    VehicleInfoPage  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrationPage,
    HistoryPage,
    BookPage,
    MainPage,
    PassengerPage,
    PaymentPage,
    ProfilePage,
    StationPage,
    TripPage,
    VehiclePage,
    VehicleInfoPage    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
