import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TerceraPage } from '../tercera/tercera';

/**
 * Generated class for the LugarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lugar',
  templateUrl: 'lugar.html'
})
export class LugarPage {
  nombreLugar: String;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nombreLugar = navParams.get('nombre');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LugarPage');
  }
  navegarAtras() {
    this.navCtrl.pop();
  }
  navegarATercera() {
    this.navCtrl.push(TerceraPage);
  }

}
