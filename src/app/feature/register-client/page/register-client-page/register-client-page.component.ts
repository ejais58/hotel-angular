import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-client-page',
  templateUrl: './register-client-page.component.html',
  styleUrl: './register-client-page.component.css'
})
export class RegisterClientPageComponent {

  constructor(private fb: FormBuilder, private router: Router){}
  
  miFormulario: FormGroup = this.fb.group({
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]

  })

  register(){}
}
