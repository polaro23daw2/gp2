import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseURL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }
//esto es para hacer la conexion de mongo atlas
  // getInformacion(): Observable<any> {
  //   return this.http.get(`${this.baseURL}/informacion`);
  // }

  GetJSON(): Observable<any> {
    return this.http.get('assets/buscador.json');
  }
}
