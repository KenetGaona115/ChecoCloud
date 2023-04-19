import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editInfo',
  templateUrl: './editInfo.component.html',
  styleUrls: ['./editInfo.component.scss']
})
export class EditInfoComponent implements OnInit {

  profileForm: FormGroup = new FormGroup({});
  imageUrl: string = '';
  fileControl :FormControl = new FormControl(['',Validators.required]);

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
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
      this.fileControl.setValue(file);
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
