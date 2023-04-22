import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    this.authService.login(this.form.value).subscribe(
      {
        next: (response: any) => {
          if (response) {
            response.forEach((user: any) => {
              if (user.email == this.form.get('email')?.value && user.password == this.form.get('password')?.value)
                this.snackBar.open('User exist!', 'Close', {
                  duration: 2000
                });
              else
                this.snackBar.open('Error, User not exist!', 'Close', {
                  duration: 2000
                });
            })
          }
        }
      }
    );
  }

  goToCreateAccount() {
    this.router.navigate(['addProfile'])
  }

}
