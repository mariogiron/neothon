import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-student-cards',
  templateUrl: './student-cards.component.html',
  styleUrls: ['./student-cards.component.css']
})
export class StudentCardsComponent implements OnInit {

  @Input() student: any;
  @Output() statusChange = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  changeStatus(status) {
    this.statusChange.emit({
      student_id: this.student.idusers,
      falta: status
    })
  }

}
