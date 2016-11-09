import {Component,Input ,OnInit} from '@angular/core';

@Component({
    selector: 'Icon',
    templateUrl: 'Icon.component.html'
})
export class Icon implements OnInit{

    @Input() iconType:any;
    m_iconType:string;

    @Input() classType:boolean;
    m_classType:string;

    constructor() {}

    ngOnInit(){
        this.m_iconType = this.iconType.top ? "top" : this.iconType.good ? "good" : this.iconType.tab;
        this.m_classType = this.classType? "icon":"logo";
    }
}