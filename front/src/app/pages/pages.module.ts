import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './Home/Home.component';
import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule, 
    ComponentsModule,
    MaterialModule
  ],
  exports: [
    HomeComponent,
    ProfileComponent
  ]
})
export class PagesModule { }
