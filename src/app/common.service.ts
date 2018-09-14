import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import { IAppstate } from './store';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private ngRedux: NgRedux<IAppstate>) { }

  isUserLogged() {
    return this.ngRedux.getState().token !== ""
  }

}
