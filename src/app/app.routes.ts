// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { authRoutes } from './features/auth/routes';
import { courseRoutes } from './features/course/routes';
import { userRoutes } from './features/user/routes';

export const routes: Routes = [
    { path: '', redirectTo: '/courses', pathMatch: 'full' },
    { path: 'auth', children: authRoutes },
    { path: 'courses', children: courseRoutes },
    { path: 'user', children: userRoutes },
    { path: '**', redirectTo: '/courses' } // 404 route
];