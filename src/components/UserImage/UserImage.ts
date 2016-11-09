import {Component,Input} from '@angular/core';

@Component({
    selector: 'UserImage',
    templateUrl: 'UserImage.component.html'
})
export class UserImage  {
    @Input() imgeUrl:string;

    constructor() {
    }
}