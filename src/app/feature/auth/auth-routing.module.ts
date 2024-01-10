import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '../login/page/login-page/login-page.component';

const routes: Routes = [
  {
    path: 'login', loadChildren: () => import('../login/login.module').then(m => m.LoginModule)
  },
  {
    path: '**',
    redirectTo: '/auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
