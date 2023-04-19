import { Component, OnInit } from '@angular/core';


interface Cancion {
  nombre: string;
  artista: string;
  imagen: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  canciones: Cancion[] = [
    {
      nombre: 'Canción 1',
      artista: 'Artista 1',
      imagen: 'https://images.freeimages.com/fic/images/icons/949/token/256/disc.png'
    },
    {
      nombre: 'Canción 2',
      artista: 'Artista 2',
      imagen: 'https://images.freeimages.com/fic/images/icons/949/token/256/disc.png'
    },
    {
      nombre: 'Canción 3',
      artista: 'Artista 3',
      imagen: 'https://images.freeimages.com/fic/images/icons/949/token/256/disc.png'
    },
    {
      nombre: 'Canción 1',
      artista: 'Artista 1',
      imagen: 'https://images.freeimages.com/fic/images/icons/949/token/256/disc.png'
    },
    {
      nombre: 'Canción 2',
      artista: 'Artista 2',
      imagen: 'https://images.freeimages.com/fic/images/icons/949/token/256/disc.png'
    },
    {
      nombre: 'Canción 3',
      artista: 'Artista 3',
      imagen: 'https://images.freeimages.com/fic/images/icons/949/token/256/disc.png'
    },
    {
      nombre: 'Canción 1',
      artista: 'Artista 1',
      imagen: 'https://images.freeimages.com/fic/images/icons/949/token/256/disc.png'
    },
    {
      nombre: 'Canción 2',
      artista: 'Artista 2',
      imagen: 'https://images.freeimages.com/fic/images/icons/949/token/256/disc.png'
    },
    {
      nombre: 'Canción 3',
      artista: 'Artista 3',
      imagen: 'https://images.freeimages.com/fic/images/icons/949/token/256/disc.png'
    },
    // Agregar más canciones al arreglo según sea necesario
  ];

  reproducirCancion(cancion: Cancion) {
    // Código para reproducir la canción
  }

  constructor() {}

  ngOnInit() {
  }

}