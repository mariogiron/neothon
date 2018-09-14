import { NgRedux } from '@angular-redux/store';
import { Component, HostListener } from '@angular/core';
import { IAppstate } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontEnd';

  constructor(private ngRedux: NgRedux<IAppstate>){}

  @HostListener("window:beforeunload", ["$event"])
  beforeUnloadHander(event) {
    // this.apiService.sendSessionData(this.ngRedux.getState());
    localStorage.removeItem('redux_data')
    localStorage.setItem('redux_data', JSON.stringify(this.ngRedux.getState()))
  }
}
