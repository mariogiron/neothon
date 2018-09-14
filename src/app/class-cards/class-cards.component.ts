import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-class-cards',
  templateUrl: './class-cards.component.html',
  styleUrls: ['./class-cards.component.css']
})
export class ClassCardsComponent implements OnInit {

  @Input() clase: any
  sDate: string
  eDate: string

  constructor() { }

  ngOnInit() {
    console.log(this.clase)
    this.sDate = moment(this.clase.start_date).format('MMM')
    this.eDate = moment(this.clase.end_date).format('MMM')
  }

}
