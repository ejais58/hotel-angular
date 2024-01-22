import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  base_url: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getRooms() {
    return this.httpClient.get(`${this.base_url}/room/all-rooms`)
  }
}
