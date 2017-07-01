import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PassengerPage } from './passenger';

@NgModule({
  declarations: [
    PassengerPage,
  ],
  imports: [
    IonicPageModule.forChild(PassengerPage),
  ],
  exports: [
    PassengerPage
  ]
})
export class PassengerPageModule {}
