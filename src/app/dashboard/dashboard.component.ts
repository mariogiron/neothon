import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { ClassService } from '../class.service';
import { IAppstate } from '../store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private classService: ClassService, private ngRedux: NgRedux<IAppstate>) { }

  ngOnInit() {
    this.classService.getAllClasses(this.ngRedux.getState().token)
    .then(res => {
      console.log(res.json())
    })
  }

}
