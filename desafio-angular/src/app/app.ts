import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Componente raíz de la aplicación.
 * - `standalone: true` para poder importarlo directamente en pruebas o bootstrap.
 * - Usa `RouterOutlet` para renderizar las rutas declaradas en `app.routes.ts`.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  /** Título de la aplicación (signal) — accesible como `title()` */
  protected readonly title = signal('Codeland');
}
