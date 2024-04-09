import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private tokenKey = 'token';

  constructor(private router: Router) { }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}