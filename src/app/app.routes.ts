import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { SimulatorService} from './services/simulator';
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: SimulatorService},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];