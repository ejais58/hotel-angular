import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceptionRoutingModule } from './reception-routing.module';
import { ReceptionPageComponent } from './page/reception-page/reception-page.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    ReceptionPageComponent
  ],
  imports: [
    CommonModule,
    ReceptionRoutingModule,
    MatCardModule
  ]
})
export class ReceptionModule { }
