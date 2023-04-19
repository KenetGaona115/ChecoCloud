import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../angular-material/angular-material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CancionesComponent } from './canciones/canciones.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditInfoComponent } from './editInfo/editInfo.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CancionesComponent,
    EditInfoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    CancionesComponent,
    EditInfoComponent
  ]
})
export class ComponentsModule { }
