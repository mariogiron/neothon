import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClassService } from '../class.service';
import { IAppstate } from '../store';
import { TeacherService } from '../teacher.service';
import { REMOVE_SIGN_IN_TOKEN } from './../actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  classes: any[]
  escuelas: any[]
  groups: any[]
  teachers: any[]
  user: any
  formularioAddCourse: FormGroup

  constructor(private classService: ClassService, private teacherService: TeacherService, private ngRedux: NgRedux<IAppstate>, private router: Router) {
    this.classes = []
    this.escuelas = []
    this.groups = []
    this.teachers = []
    this.classService.getAllClasses(this.ngRedux.getState().token)
    .then(res => {
      this.user = res.json()
      this.classes = this.user.clases
    })
    this.formularioAddCourse = new FormGroup({
      tipo: new FormControl(''),
      escuela: new FormControl(''),
      fecha_inicio: new FormControl(''),
      fecha_fin: new FormControl(''),
      profesor: new FormControl('')
    })
    this.classService.getAllEscuelas().then(res => this.escuelas = res.json())
    this.classService.getAllGroups().then(res => this.groups = res.json())
    this.teacherService.getAll().then(res => {
      console.log(res.json())
      this.teachers = res.json()
    })
  }

  onSubmitNewCourse() {
    console.log(this.formularioAddCourse.value)
    this.classService.addNewCourse(this.formularioAddCourse.value)
    .then(result => {
      if (result.json().success) {
        alert(result.json().success)
      }
    })
  }

  logout() {
    this.ngRedux.dispatch({
      type: REMOVE_SIGN_IN_TOKEN
    })
    this.router.navigate(['/login'])
  }

  ngOnInit() {

  }

}
