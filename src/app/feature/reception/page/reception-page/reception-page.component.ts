import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reception-page',
  templateUrl: './reception-page.component.html',
  styleUrl: './reception-page.component.css'
})
export class ReceptionPageComponent {

  constructor(private router: Router){}
  postClient() {
    this.router.navigate(['home/register-client']);
  }
}
