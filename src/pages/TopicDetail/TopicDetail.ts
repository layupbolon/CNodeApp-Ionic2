import {Component, OnInit} from '@angular/core';
import {NavParams} from 'ionic-angular';

import {DataService, ConfigService} from '../../services';

@Component({
  templateUrl: 'TopicDetail.html',
  providers: [DataService, ConfigService]
})
export class TopicDetail implements OnInit {
  dataSource: any;

  constructor(private dataService: DataService,
              private navParams: NavParams,
              private configService: ConfigService) {
  }

  ngOnInit() {
    let id = this.navParams.get("id");
    this.dataService.GetTopicDetail(id).subscribe(
      data => {
        this.dataSource = data;
      }
    );
  }
}
