import {Component,ViewChild} from '@angular/core';
import {Platform,MenuController,LoadingController,Nav} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';

import {List} from '../pages';

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage = List;
  items: Array<{title: string,type: string}>;
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform,public menu: MenuController, public loadingCtrl: LoadingController) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      this.hideSplashScreen();
      Splashscreen.hide();
    });

    this.items = [
      {title: "全部", type: "all"},
      {title: "精华", type: "good"},
      {title: "分享", type: "share"},
      {title: "问答", type: "ask"},
      {title: "招聘", type: "job"}
    ]
  }

  hideSplashScreen() {
    if (Splashscreen) {
      setTimeout(() => {
        Splashscreen.hide();
      }, 100);
    }
  }

  itemTapped(event, item) {
    this.menu.close();
    let loading = this.loadingCtrl.create({
      content: "拼命加载中...",
      duration: 1000,
      dismissOnPageChange: true
    });
    loading.present();
    this.nav.setRoot(List, {item: item});
  }
}
