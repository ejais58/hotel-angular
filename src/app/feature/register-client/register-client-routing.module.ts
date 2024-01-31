import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterClientPageComponent } from './page/register-client-page/register-client-page.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterClientPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterClientRoutingModule { }
