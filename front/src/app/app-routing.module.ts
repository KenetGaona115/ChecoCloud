import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/Home/Home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DetalleCancionComponent } from './pages/detalle-cancion/detalle-cancion.component';
import { AddSongComponent } from './pages/add-song/add-song.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redireccionar a la página de inicio
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'song/:id', component: DetalleCancionComponent},
  { path: 'add', component:AddSongComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
