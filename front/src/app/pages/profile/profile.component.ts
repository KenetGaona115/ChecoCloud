import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup = new FormGroup({});
  imageUrl: string = '';
  fileControl :FormControl = new FormControl({});

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      file:this.fileControl
    });
  }

  onSubmit() {
    // Enviar el formulario al backend para guardar el perfil del usuario
  }

  onCancel() {
    // Volver a la página de perfil del usuario sin guardar los cambios
  }

  getErrorMessage(controlName: string) {
    if (this.profileForm.controls[controlName].hasError('required')) {
      return 'Campo requerido';
    }
    if (controlName === 'email' && this.profileForm.controls[controlName].hasError('email')) {
      return 'Correo electrónico inválido';
    }
    return '';
  }

  
  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  
}


/*
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, this.matchValues('password')]]
    });
  }

  matchValues(matchTo: string) {
    return (control) => {
      return control?.value === control?.parent?.controls[matchTo].value ? null : { notMatching: true };
    };
  }

  getErrorMessage(control) {
    if (control.errors.required) {
      return 'Este campo es requerido';
    }
    if (control.errors.email) {
      return 'Debe ser un correo electrónico válido';
    }
    if (control.errors.minlength) {
      return `Debe tener al menos ${control.errors.minlength.requiredLength} caracteres`;
    }
    if (control.errors.notMatching) {
      return 'Las contraseñas no coinciden';
    }
    return '';
  }

  save() {
    if (this.userForm.valid) {
      console.log('Usuario guardado:', this.userForm.value);
      // Aquí se puede enviar la información del usuario al servidor
    } else {
      console.log('El formulario es inválido');
    }
  }

  cancel() {
    console.log('Se canceló la edición de perfil');
    // Aquí se puede volver a la página de perfil sin guardar


*/