import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent implements OnInit {

  usuarioForm: FormGroup;
  confirm = new FormControl('', [Validators.required, Validators.minLength(8)])

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {
    this.usuarioForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.confirm.value.includes(this.usuarioForm.get('password')?.value))
      this.userService.createUser(this.usuarioForm.value).subscribe(
        {
          next: (result) => { console.log(result) },
          error: (err) => { console.log(err) }
        }
      )
    else
      this.snackBar.open('Password error !', 'Close', {
        duration: 2000
      });
  }

}
