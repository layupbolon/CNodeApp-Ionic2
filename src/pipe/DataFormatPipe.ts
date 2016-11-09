import {PipeTransform, Pipe} from '@angular/core';

@Pipe({
    name: 'dateFormatPipe'
})
export class DateFormatPipe implements PipeTransform {
    constructor() {
    }

    transform(value:string, args:any[]) {
        if (value) {
            value = this.Format(value);
        }
        return value;
    }

    private Format(value:string) {
        let date = new Date(value);
        let time = new Date().getTime() - date.getTime(); //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
        if (time < 0) {
            return '';
        } else if ((time / 1000) < 60) {
            return '刚刚';
        } else if ((time / 60000) < 60) {
            return Math.floor((time / 60000)).toString() + '分钟前';
        } else if ((time / 3600000) < 24) {
            return Math.floor((time / 3600000)).toString() + '小时前';
        } else if ((time / 86400000) < 31) {
            return Math.floor((time / 86400000)).toString() + '天前';
        } else if ((time / 2592000000) < 12) {
            return Math.floor((time / 2592000000)).toString() + '月前';
        } else {
            return Math.floor((time / 31536000000)).toString() + '年前';
        }
    }
}