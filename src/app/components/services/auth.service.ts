import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(data: any): Observable<any>{
    return this.http.post<any>('http://apolis-grocery.herokuapp.com/api/auth/register', data)
  }

  login(data: any){
    return this.http.post<any>('http://apolis-grocery.herokuapp.com/api/auth/login', data)
  }
}