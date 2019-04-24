import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  public isAuthenticated = false;

  constructor(
    private router: Router,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.userService.isAuthenticated.subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
  }

  public signOut() {
    window.localStorage.removeItem('user');
    this.userService.isAuthenticated.next(false);
    this.router.navigate(['/']);
  }
}
