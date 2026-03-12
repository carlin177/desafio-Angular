import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-selector-negocios',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './selector-negocios.component.html',
  styleUrls: ['./selector-negocios.component.css']
})
export class SelectorNegociosComponent {
  negocios = [
    {
      nombre: 'ferreteria lopez',
      plan: 'pro',
      sucursales: 2
    },
    {
      nombre: 'pizzeria lopez',
      plan: 'free',
      sucursales: 1
    }
  ];
}
