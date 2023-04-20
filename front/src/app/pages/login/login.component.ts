import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 form !: FormGroup

  constructor(
    private fb: FormBuilder,
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }

  login(){
    this.authService.login(this.form.value)
    if(this.form.value.email=="desarrollo@prueba.com"){
      console.log("login success")
      localStorage.setItem("isLogged",'true')
      this.router.navigate(['/home'])
    }
  }

  goToCreateAccount(){
    this.router.navigate(['addProfile'])
  }

}
