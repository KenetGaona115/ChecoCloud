import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Home/Home.component';
import { ComponentsModule } from '../components/components.module';
import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from '../angular-material/angular-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule, 
    ComponentsModule, 
    MaterialModule, 
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    ProfileComponent
  ]
})
export class PagesModule { }
