import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from './page/admin-page/admin-page.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCardModule
  ]
})
export class AdminModule { }
