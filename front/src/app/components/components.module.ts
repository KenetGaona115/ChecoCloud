import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../angular-material/angular-material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CancionesComponent } from './canciones/canciones.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CancionesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent,
    CancionesComponent
  ]
})
export class ComponentsModule { }
