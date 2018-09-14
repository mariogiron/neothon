import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";
import { CommonService } from './common.service';

@Injectable()
export class LoginGuard implements CanActivate{

  constructor(private commonService: CommonService, private router: Router) { }

  canActivate() {
    if (this.commonService.isUserLogged()) {
      return true
    } else {
      this.router.navigate(['/login'])
      return false
    }
  }

}
