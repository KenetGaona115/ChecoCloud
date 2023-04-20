import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/Home/Home.component';
import { AddSongComponent } from './pages/add-song/add-song.component';
import { CreateProfileComponent } from './pages/create-profile/create-profile.component';
import { DetalleCancionComponent } from './pages/detalle-cancion/detalle-cancion.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redireccionar a la página de inicio
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'song/:id', component: DetalleCancionComponent, canActivate: [AuthGuardService] },
  { path: 'add', component: AddSongComponent, canActivate: [AuthGuardService] },
  { path: 'addProfile', component: CreateProfileComponent},
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
