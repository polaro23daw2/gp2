import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseURL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getInformacion(): Observable<any> {
    return this.http.get(`${this.baseURL}/informacion`);
  }
}
