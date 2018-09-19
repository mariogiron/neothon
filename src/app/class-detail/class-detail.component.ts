import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { UserService } from '../user.service';
import { IAppstate } from './../store';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {

  studentCards: any[];
  formularioAddCourse: FormGroup;
  date: any;
  class: any

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, public ngRedux: NgRedux<IAppstate>) {
    this.activatedRoute.params.subscribe((params) =>{
      this.userService.getStudents(params.id, null).then((response) => {
        this.studentCards = response.json().students;
        this.class = response.json()
        console.log(this.class)
      })
    })

    this.date = moment(new Date()).format("YYYY-MM-DD")

    this.formularioAddCourse = new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(''),
      email: new FormControl(''),
      dni: new FormControl(''),
      address: new FormControl(''),
      phone: new FormControl('')
    })
  }

  ngOnInit() {

  }

  onChangeDate(newDate) {
    console.log(newDate)
    this.date = moment(newDate).format('YYYY-MM-DD')
    this.activatedRoute.params.subscribe((params) =>{
      this.userService.getStudents(params.id, newDate).then((response) => {
        this.studentCards = response.json().students;
      })
    })
  }

  onStatusChange($event) {
    console.log($event)
    this.userService.changeStudentStatus($event.student_id, $event.falta, this.date)
    .then(res => {
      console.log(res.json())
      let nFalta = $event.falta === true ? 0 : -1
      this.studentCards.filter( student => student.idusers == $event.student_id)[0].incident_type = nFalta
    })
  }

}
