import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  baseUrl: string

  constructor(private http: Http) {
    this.baseUrl = 'https://neothon.ngrok.io/api/class'
  }

  getAllClasses(token_id) {
    let url = `${this.baseUrl}/all`
    return this.http.post(url, { token: token_id }).toPromise()
  }

}
