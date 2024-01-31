import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterClientRoutingModule } from './register-client-routing.module';
import { RegisterClientPageComponent } from './page/register-client-page/register-client-page.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    RegisterClientPageComponent
  ],
  imports: [
    CommonModule,
    RegisterClientRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class RegisterClientModule { }
