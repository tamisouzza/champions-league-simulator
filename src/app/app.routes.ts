import { Routes } from '@angular/router';
import { Teams } from './pages/teams/teams';

export const routes: Routes = [
  { path: '', redirectTo: 'teams', pathMatch: 'full' },
  { path: 'teams', component: Teams },
];
