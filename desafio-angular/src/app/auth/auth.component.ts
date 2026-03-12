import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Componente de autenticación (login).
 * - Standalone component: no necesita módulo externo.
 * - Campos ligados con `[(ngModel)]` para fácil uso en plantillas.
 * - Métodos en español y mensajes de consola para facilitar su entendimiento.
 */

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  usuario = '';
  password = '';
  mostrarPassword = false;
  constructor(private router: Router) {}

  togglePassword(): void {
    this.mostrarPassword = !this.mostrarPassword;
  }

  onSubmit(): void {
    console.log('Usuario:', this.usuario);
    console.log('Password:', this.password);
    // Navegar a la pantalla principal después del login (simulado)
    this.router.navigate(['home']);
  }
}
