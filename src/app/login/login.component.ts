import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '../../../node_modules/@angular/forms';
import { UserService } from '../user.service';
import { NgRedux } from '../../../node_modules/@angular-redux/store';
import { SIGN_IN_TOKEN } from '../actions';
import { IAppstate } from '../store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  token: any;

  constructor(private userService: UserService, private ngRedux: NgRedux<IAppstate>) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  login(pUserData){
    this.userService.getUser(pUserData).then((response) => {
      if(response.json().err){
        console.log(response.json().err);
      }else{
        console.log(response.json());
        this.ngRedux.dispatch({
          type: SIGN_IN_TOKEN,
          data: response.json().token
        })
      }
    })
  }

}
