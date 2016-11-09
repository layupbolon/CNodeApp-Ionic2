import {Injectable} from  '@angular/core';

@Injectable()
export class ConfigService {
    public readonly ApiAddress: string = 'https://cnodejs.org';
    public readonly GetTopicsApi: string = '/api/v1/topics';
    public readonly GetTopicByIdApi: string = '/api/v1/topic/';

    constructor() {}
}
