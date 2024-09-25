import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

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
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    //loadComponent: () => import('./forgot-password/forgot-password.component')
  }
] as Routes;
