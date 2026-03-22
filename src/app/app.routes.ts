import { Routes } from '@angular/router';

// Define the routes for the app - each path loads a different page
export const routes: Routes = [
  {
    path: 'home',
    // Load the home page component
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
  },
  {
    path: '',
    // Redirect empty path to home
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'ulster',
    // Load the Ulster page component
    loadComponent: () => import('./ulster/ulster.page').then(m => m.UlsterPage),
  },
  {
    path: 'munster',
    // Load the Munster page component
    loadComponent: () => import('./munster/munster.page').then(m => m.MunsterPage),
  },
  {
    path: 'connacht',
    // Load the Connacht page component
    loadComponent: () => import('./connacht/connacht.page').then(m => m.ConnachtPage),
  },
  {
    path: 'leinster',
    // Load the Leinster page component
    loadComponent: () => import('./leinster/leinster.page').then(m => m.LeinsterPage),
  },
  {
    path: 'leinster-counties',
    // Load the Leinster Counties page component
    loadComponent: () => import('./leinster-counties/leinster-counties.page').then(m => m.LeinsterCountiesPage),
  },
];