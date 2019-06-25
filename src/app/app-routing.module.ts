import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './services/guards/authentication/authentication.guard';
import { LoginGuard } from './services/guards/login/login.guard';

const routes: Routes = [
  { path: '', canActivate: [AuthenticationGuard], loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'trip/:id', canActivate: [AuthenticationGuard], loadChildren: './pages/trip/trip.module#TripPageModule' },

  { path: 'login', canActivate: [LoginGuard], loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', canActivate: [LoginGuard], loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'add', loadChildren: './pages/add/add.module#AddPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
