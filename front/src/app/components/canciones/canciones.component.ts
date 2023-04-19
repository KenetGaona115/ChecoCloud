import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.scss']
})
export class CancionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items = [
    { title: 'Elemento 1', description: 'Descripción del elemento 1' },
    { title: 'Elemento 2', description: 'Descripción del elemento 2' },
    { title: 'Elemento 3', description: 'Descripción del elemento 3' },
    { title: 'Elemento 4', description: 'Descripción del elemento 4' },
    { title: 'Elemento 5', description: 'Descripción del elemento 5' },
    { title: 'Elemento 6', description: 'Descripción del elemento 6' }
  ];
  
}
