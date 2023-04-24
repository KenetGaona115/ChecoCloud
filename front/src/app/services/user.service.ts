import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(user: any) {
    const url = environment.URL;
    return this.http.put(url+'/items', user);
    //return this.http.post('/createUser', user)
    //TODO hacer llamada para crear usuario
  }

  getUser() {

  }

}
