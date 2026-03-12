import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { RegisterStepOneComponent } from './register-step-one/register-step-one.component';
import { RegisterStepTwoComponent } from './register-step-two/register-step-two.component';
import { SelectorNegociosComponent } from './selector-negocios/selector-negocios.component';

/**
 * Definición de rutas de la aplicación.
 * - La raíz redirige al login para asegurar que el usuario pase por autenticación.
 * - Las rutas usan componentes `standalone` para simplificar imports.
 */
export const routes: Routes = [
	{ path: '', redirectTo: 'auth', pathMatch: 'full' },
	{ path: 'auth', component: AuthComponent },
	{ path: 'registro', component: RegisterStepOneComponent },
	{ path: 'registro/paso-2', component: RegisterStepTwoComponent },
	{ path: 'registrar/paso-dos', component: RegisterStepTwoComponent },
	{ path: 'selector-negocios', component: SelectorNegociosComponent },
	{ path: 'home', component: HomeComponent },
];
