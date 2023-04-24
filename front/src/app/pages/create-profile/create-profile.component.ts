import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import {v4} from 'uuid';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent implements OnInit {
  existingIds: number[] = [];
  usuarioForm: FormGroup;
  confirm = new FormControl('', [Validators.required, Validators.minLength(3)])

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar
    
  ) {
   // const uniqueId = uuidv4();
    //this.uniqueNumberId = parseInt(uniqueId.replace(/\D/g, ''));
    
    const uniqueId = uuidv4();
    const numericId = BigInt(uniqueId.replace(/\D/g, ''));
    this.usuarioForm = this.fb.group({
      id: [5],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
  }

  generateId(): number {
    let id = Math.floor(Math.random() * 100000000); // Genera un número aleatorio entre 0 y 100000000
    while (this.existingIds.includes(id)) { // Comprueba si el número ya existe en la lista de identificadores existentes
      id = Math.floor(Math.random() * 100000000); // Si ya existe, genera un nuevo número aleatorio
    }
    
    this.existingIds.push(id); // Agrega el nuevo identificador a la lista de identificadores existentes
    return id;
  }
  onSubmit() {
    const id = this.generateId();
    this.usuarioForm.value.id = id;
    console.log(this.usuarioForm.value.id );
    if (this.confirm.value.includes(this.usuarioForm.get('password')?.value))
      this.userService.createUser(this.usuarioForm.value).subscribe(
        {
          next: (result) => { console.log(result); console.log("a poco si"); this.snackBar.open('User created!', 'Close', {
            duration: 2000
          });},
          error: (err) => { console.log(err); console.log("valio vrga"); this.snackBar.open('Try!', 'Close', {
            duration: 2000
          });}
        }
      )
    else
      this.snackBar.open('Password error !', 'Close', {
        duration: 2000
      });
  }

}
