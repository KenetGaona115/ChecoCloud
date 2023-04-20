import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(): boolean {
    return false;
  }

  login():boolean{
    //TODO:hacer login
    return true;//false si existe error
  }

  logout(){
    //Todo:hacer logout
  }


}
