import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  constructor(private router: Router){}
  ngOnInit() {
    
  }

  @Input() role: 'admin' | 'reception' = 'reception';

  logout(){
    this.router.navigate(['/auth/login'])
  }
}
