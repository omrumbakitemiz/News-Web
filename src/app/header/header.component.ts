import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
}
