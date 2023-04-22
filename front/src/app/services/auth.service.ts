import { HttpClient } from '@angular/common/http';
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

  login(user: any): boolean {

    this.http.get<User>(environment.URL + '/Login').subscribe(
      {
        next: (response: any) => { console.log(response) }
      }
    );
    return true;//false si existe error
  }

  logout() {
    //Todo:hacer logout
  }


}
