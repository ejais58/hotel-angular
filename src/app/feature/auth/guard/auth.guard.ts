import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Observable, map, take } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) : Observable<boolean> | Promise<boolean> | boolean=> {
  const authService = inject(AuthService);
  const router = inject(Router)
  

  if (authService.loggedIn()){
    return true
  }
  return false
};
