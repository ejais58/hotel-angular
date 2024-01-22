import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './feature/home/page/home-page/home-page.component';
import { authGuard } from './feature/auth/guard/auth.guard';


const routes: Routes = [
  {
    path: 'auth', loadChildren: () => import('./feature/auth/auth.module').then(m => m.AuthModule)
  },
  { 
    path: '', 
    redirectTo: '/auth/login', 
    pathMatch: 'full' 
  },
  {
    path: 'home',
    component: HomePageComponent, 
    loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule),
    //canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
