import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsPageComponent } from './page/rooms-page/rooms-page.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    RoomsPageComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    MatTableModule,
    MatIconModule
  ]
})
export class RoomsModule { }
