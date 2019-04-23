import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class NewsGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {
  }

  private async checkIsAuthenticated() {
    return window.localStorage.getItem('user');
  }

  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = await this.checkIsAuthenticated();
    if (user) {
      this.userService.isAuthenticated.next(true);
    }

    const isAuthenticated = this.userService.isAuthenticated.value;
    if (isAuthenticated) {
      return true;
    } else {
      console.log('Navigating...');
      this.router.navigate(['sign-in']);
      return false;
    }
  }
}
