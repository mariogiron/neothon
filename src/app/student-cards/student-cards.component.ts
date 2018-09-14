import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-cards',
  templateUrl: './student-cards.component.html',
  styleUrls: ['./student-cards.component.css']
})
export class StudentCardsComponent implements OnInit {

  @Input() student: any;

  constructor() { }

  ngOnInit() {
  }

}
