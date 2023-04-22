import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(user: any) {
    return this.http.post('/createUser', user)
    //TODO hacer llamada para crear usuario
  }

  getUser() {

  }

}
