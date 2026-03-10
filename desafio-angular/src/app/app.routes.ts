import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';

/**
 * Definición de rutas de la aplicación.
 * - La raíz redirige al login para asegurar que el usuario pase por autenticación.
 * - Las rutas usan componentes `standalone` para simplificar imports.
 */
export const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'login', component: AuthComponent },
	{ path: 'home', component: HomeComponent },
];
