import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private uri: string = 'https://randmuser.me/api';

  constructor(private http: HttpClient) {}

  getUsers = () => this.http.get(this.uri);
  
}
