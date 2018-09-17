import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { UserService } from '../user.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {

  studentCards: any[];
  formularioAddCourse: FormGroup

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { 
    this.activatedRoute.params.subscribe((params) =>{
      this.userService.getStudents(params.id).then((response) => {
        this.studentCards = response.json().students;
      })
    })

    this.formularioAddCourse = new FormGroup({
      tipo: new FormControl(''),
      escuela: new FormControl(''),
      fecha_inicio: new FormControl(''),
      fecha_fin: new FormControl(''),
      profesor: new FormControl('')
    })
  }

  ngOnInit() {

  }

}
