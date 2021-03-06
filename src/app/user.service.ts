import { Injectable } from '@angular/core';
import { Http } from '../../node_modules/@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http) { }

  getUser(pUserData){
    let url = 'https://hackathon-p2.herokuapp.com/api/users/login';
    return this.http.post(url, pUserData).toPromise();
  }

  getStudents(idClase, dateClass){
    let url = `https://hackathon-p2.herokuapp.com/api/class/${idClase}`;
    console.log(url)
    return this.http.post(url, {fecha: dateClass}).toPromise();
  }

  changeStudentStatus(alumnoId, falta, fechaCambio) {
    console.log(alumnoId, falta, fechaCambio)
    let url = 'https://hackathon-p2.herokuapp.com/api/students/status'
    return this.http.post(url, {
      alumno_id: alumnoId,
      falta: falta,
      fecha_cambio: fechaCambio
    }).toPromise()
  }
}

