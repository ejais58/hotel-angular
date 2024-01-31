import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';
import { authGuard } from '../auth/guard/auth.guard';
import { adminGuard } from '../auth/guard/admin.guard';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule),
    //canActivate: [adminGuard]
  },
  {
    path: 'reception',
    loadChildren: () => import('../reception/reception.module').then(m => m.ReceptionModule)
  },
  {
    path: 'rooms',
    loadChildren: () => import('../rooms/rooms.module').then(m => m.RoomsModule)
  },
  {
    path: 'register-client',
    loadChildren: () => import('../register-client/register-client.module').then(m => m.RegisterClientModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
