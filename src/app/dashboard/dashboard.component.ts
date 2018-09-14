import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClassService } from '../class.service';
import { IAppstate } from '../store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  classes: any[]
  user: any
  formularioAddCourse: FormGroup

  constructor(private classService: ClassService, private ngRedux: NgRedux<IAppstate>) {
    this.classes = []
    this.formularioAddCourse = new FormGroup({
      nombre: new FormControl(''),
      categoria: new FormControl(''),
      fecha_inicio: new FormControl(''),
      fecha_fin: new FormControl(''),
      profesor: new FormControl('')
    })
  }

  onSubmitNewCourse() {
    console.log(this.formularioAddCourse.value)
  }

  ngOnInit() {
    this.classService.getAllClasses(this.ngRedux.getState().token)
    .then(res => {
      this.user = res.json()
      this.classes = this.user.clases
    })
  }

}
