import {Component} from '@angular/core';
import {NavParams, App, NavController,LoadingController} from 'ionic-angular';

import {DataService, ConfigService} from '../../services';
import {TopicDetail} from '../../pages';

@Component({
  templateUrl: 'List.component.html',
  providers: [DataService, ConfigService]
})
export class List {
  private topics = [];

  private setting = {
    page: 1,
    limit: 10,
    tab: "all"
  };

  title: string = "全部";

  constructor(private dataService: DataService,
              private navParams: NavParams,
              private configService: ConfigService,
              private app: App,
              private nav: NavController,
              public loadingCtrl: LoadingController) {

    if (this.navParams.get("item")) {
      this.setting.tab = this.navParams.get("item").type;
      this.title = this.navParams.get("item").title;
    }
    this.dataService.GetTopics(this.setting).subscribe(
      data => {
        this.topics = data;
      }
    );
  }

  doRefresh(refresher) {
    this.setting.page = 1;
    setTimeout(() => {
      this.dataService.GetTopics(this.setting).subscribe(
        data => {
          this.topics = data;
        }
      );
      refresher.complete();
    }, 500);// 延迟500ms
  }

  doInfinite(infiniteScroll) {
    this.setting.page++;
    setTimeout(() => {
      this.dataService.GetTopics(this.setting).subscribe(
        data => {
          this.topics = this.topics.concat(data);
        }
      );
      infiniteScroll.complete();
    }, 500); // 延迟500ms
  }

  goto(id: string) {
    let loading = this.loadingCtrl.create({
      content: "拼命加载中...",
      duration: 1000,
      dismissOnPageChange: true
    });
    loading.present();
    this.nav.push(TopicDetail, {id: id});
  }
}
