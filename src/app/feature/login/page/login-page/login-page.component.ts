import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../../../auth/service/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit, OnDestroy{
  loginSubscribe: Subscription;

  constructor(private httpClient: HttpClient, private fb: FormBuilder, private router: Router, private authService: AuthService){
    this.loginSubscribe = new Subscription();
  }
  
  
 
  

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
    
    const {email, password} = this.miFormulario.value

    this.loginSubscribe = this.authService.login(email,password).subscribe((respuesta: any) =>{
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

  ngOnDestroy(): void {
    if (this.loginSubscribe) {
      this.loginSubscribe.unsubscribe();
    }
  }

  hide = true;
}
