import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './Home/Home.component';
import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from '../angular-material/angular-material.module';
import { DetalleCancionComponent } from './detalle-cancion/detalle-cancion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddSongComponent } from './add-song/add-song.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    DetalleCancionComponent,
    AddSongComponent
  ],
  imports: [
    CommonModule, 
    ComponentsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
    ProfileComponent,
    DetalleCancionComponent,
    AddSongComponent
  ]
})
export class PagesModule { }
