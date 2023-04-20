import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLogged') == 'true' 
  }

  login(user: any): boolean {
    //TODO:hacer login
    return true;//false si existe error
  }

  logout() {
    //Todo:hacer logout
  }


}
