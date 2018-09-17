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

  getAllEscuelas() {
    let url = `${this.baseUrl}/escuelas/all`
    return this.http.get(url).toPromise()
  }

  getAllGroups() {
    let url = `${this.baseUrl}/groups/all`
    return this.http.get(url).toPromise()
  }

  addNewCourse(values) {
    let url = `${this.baseUrl}/new`
    return this.http.post(url, {
      id_group: values.tipo,
      id_escuela: values.escuela,
      start_date: values.fecha_inicio,
      end_date: values.fecha_fin,
      id_teacher: values.profesor
    }).toPromise()
  }

}
