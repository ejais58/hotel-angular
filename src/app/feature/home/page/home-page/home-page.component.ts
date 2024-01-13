import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) {}
  token: string | null = null;
  decodedToken: any | null = null;
  role: 'admin' | 'reception' = 'admin';
  ngOnInit() {
    // Se ejecuta solo en el navegador
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('token')

      if (this.token) {
        const payload = this.token.split('.')[1];
        const decodedPayload = atob(payload);
        
        this.decodedToken = JSON.parse(decodedPayload);

        this.role = this.decodedToken.userRole

        if (this.role === 'admin') {
          this.router.navigate(['home/admin'])
        } else if (this.role === 'reception') {
          this.router.navigate(['home/reception'])
        }
      }
    }
  }








}
