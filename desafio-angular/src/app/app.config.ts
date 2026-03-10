import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

/**
 * Configuración de la aplicación.
 * - Proveedores globales necesarios para el bootstrap de la app.
 * - `provideRouter(routes)` registra las rutas definidas en `app.routes.ts`.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
