import { Routes } from '@angular/router';
import { authGuard } from './core/auth.guard';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./auth/auth.routes').then(m => m.authRoutes) },
  ];
