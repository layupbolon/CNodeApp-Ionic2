import {Injectable} from  '@angular/core';
import {Http} from '@angular/http';
import {ConfigService} from "./ConfigService";
import merged from 'obj-merged';
import 'rxjs/Rx';

@Injectable()
export class DataService {
    constructor(private http: Http, private configSerivce: ConfigService) {
    }

    private GetTopicsUrl(setting = {}) {
        let defaultSetting = {
            page: 1,
            limit: 10,
            tab: "all"
        };

        let newSetting = merged(defaultSetting, setting);

        let url = this.configSerivce.ApiAddress + this.configSerivce.GetTopicsApi + "?";
        if (newSetting.page) {
            url += 'page=' + newSetting.page;
        }
        if (newSetting.tab) {
            url += '&tab=' + newSetting.tab;
        }
        else {
            url += '&tab=all';
        }
        if (newSetting.limit) {
            url += '&limit=' + newSetting.limit;
        }
        url += '&mdrender=false&';
        return url;
    }

    public GetTopics(setting) {
        let url = this.GetTopicsUrl(setting);
        return this.http.get(url)
            .map(res=>res.json().data);
    }

    public GetTopicDetail(id: string) {
        let url = this.configSerivce.ApiAddress + this.configSerivce.GetTopicByIdApi + id + "?" + Math.random().toString(36).substr(2);
        let result = this.http.get(url).map(res=>res.json().data);
        return result;
    }
}