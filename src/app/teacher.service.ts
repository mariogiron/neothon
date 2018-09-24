import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  baseUrl: string

  constructor(private http: Http) {
    this.baseUrl = 'https://hackathon-p2.herokuapp.com/api/teachers'
  }

  getAll() {
    let url = `${this.baseUrl}/all`
    return this.http.get(url).toPromise()
  }

}
