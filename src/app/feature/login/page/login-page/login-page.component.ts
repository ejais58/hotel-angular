import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit{
  constructor(private httpClient: HttpClient, private fb: FormBuilder, private router: Router){}
  

  base_url: string = 'http://localhost:3000';

  miFormulario: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  })

  ngOnInit() {
   
  }


  getErrorMessage(controlName: string): string {
    const control = this.miFormulario.get(controlName);

    if (control?.hasError('required')) {
      return 'You must enter a value';
    }

    return control?.hasError('email') ? 'Not a valid email' : '';
  }

  login() {
    
    const email = this.miFormulario.get('email')?.value;
    const password = this.miFormulario.get('password')?.value;
    
    return this.httpClient.post(`${this.base_url}/auth/login`, {email,password}).subscribe((respuesta: any) =>{
      console.log(respuesta);

      if (respuesta.token) {
        // Guardar el token en localStorage
        localStorage.setItem('token', respuesta.token);
  
        // Redireccionar después de una respuesta exitosa
        this.router.navigate(['/home']);
      } else {
        console.error(respuesta);
      }
      
    })
  }

  hide = true;
}
