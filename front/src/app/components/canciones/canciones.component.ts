import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.scss']
})
export class CancionesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  items = [
    { title: 'Elemento 1', description: 'Descripción del elemento 1', id: '1' },
    { title: 'Elemento 2', description: 'Descripción del elemento 2', id: '2' },
    { title: 'Elemento 3', description: 'Descripción del elemento 3', id: '3' },
    { title: 'Elemento 4', description: 'Descripción del elemento 4', id: '4' },
    { title: 'Elemento 5', description: 'Descripción del elemento 5', id: '5' },
    { title: 'Elemento 6', description: 'Descripción del elemento 6', id: '6' }
  ];

  irADetalleCancion(id: string) {
    this.router.navigate(['/song', id]);
  }

}
