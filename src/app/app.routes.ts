import { Routes } from '@angular/router';
import {TaskPageModule} from "./task-page/task-page.module";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth-page/auth-page.module').then(m => m.AuthPageModule),
  },
  {
    path: 'get-task',
    loadChildren: () => import('./get-task-page/get-task-page.module').then(m => m.GetTaskPageModule),
  },
  {
    path: 'task-page',
    loadChildren: () => import('./task-page/task-page.module').then(m => m.TaskPageModule),
  }
];
