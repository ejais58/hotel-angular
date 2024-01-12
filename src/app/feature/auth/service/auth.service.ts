import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient){}
  

  base_url: string = 'http://localhost:3000';

  login(email: string, password: string): Observable<object> {
    return this.httpClient.post(`${this.base_url}/auth/login`, {email,password})
  }
}
