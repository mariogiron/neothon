import { Injectable } from '@angular/core';
import { Http } from '../../node_modules/@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http) { }

  getUser(pUserData){
    let url = 'https://neothon.ngrok.io/api/users/login';
    return this.http.post(url, pUserData).toPromise();
  }

  getStudents(idClase){
    let url = `https://neothon.ngrok.io/api/students/${idClase}`;
    console.log(url)
    return this.http.post(url, {}).toPromise();
  }
}

