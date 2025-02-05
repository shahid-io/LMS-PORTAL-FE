// src/app/features/course/routes.ts
import { Routes } from '@angular/router';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';

export const courseRoutes: Routes = [
    { path: '', component: CourseListComponent },
    { path: ':id', component: CourseDetailsComponent }
];