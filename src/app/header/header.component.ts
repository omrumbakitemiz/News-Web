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
  ) { }

  ngOnInit() {
    // this.router.routeReuseStrategy.shouldReuseRoute = function () {
    //   return false;
    // };
    const user = JSON.parse(window.localStorage.getItem('user'));
    this.isAuthenticated = !!user;
  }

  navigate(path: string) {
    if (path) {
      this.router.navigate([path])
        .then(result => {
          if (result) {
            console.log(`NAVIGATED TO: ${path}`);
          }
        });
    }
  }

  public signOut() {
    window.localStorage.removeItem('user');
    this.userService.isAuthenticated.next(false);
    this.router.navigate(['/']);
  }
}
