import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export default [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
   component: LoginComponent,
    //loadComponent: () => import('./login/login.component'),
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.component'),
  },
] as Routes;
