import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLogged') == 'true'
  }

  login(user: any) {
    let params = new HttpParams().set("correo", user.email).set("password", user.password)
    return this.http.get<User | any>(environment.URL + '/items', { params })
  }

  logout() {
    //Todo:hacer logout
  }


}
