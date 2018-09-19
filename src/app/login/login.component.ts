import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgRedux } from '../../../node_modules/@angular-redux/store';
import { FormControl, FormGroup, Validators } from '../../../node_modules/@angular/forms';
import { SIGN_IN_TOKEN } from '../actions';
import { IAppstate } from '../store';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  token: any;
  errors: any;

  constructor(private userService: UserService, private ngRedux: NgRedux<IAppstate>, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  login(pUserData){
    this.userService.getUser(pUserData).then((response) => {
      if(response.json().err){
        this.errors = (response.json().err);
      }else{
        console.log(response.json());
        this.ngRedux.dispatch({
          type: SIGN_IN_TOKEN,
          data: {
            token: response.json().token,
            user_type: response.json().type
          }
        })
        this.router.navigate(['/'])
      }
    })
  }

}
