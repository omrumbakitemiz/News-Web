import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {
  signInFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    if (this.userService.isAuthenticated.value) {
      this.router.navigate(['/']);
    }
    else {
      this.signInFormGroup = this.formBuilder.group({
        username: ['', [Validators.required, Validators.minLength(2)]],
        passwordHash: ['', [Validators.required, Validators.minLength(8)]],
      });
    }
  }

  public onFormSubmit() {
    const value = this.signInFormGroup.value;
    if (value) {
      this.userService.login(value).subscribe(loggedInUser => {
          window.localStorage.setItem('user', JSON.stringify(loggedInUser));
          this.userService.isAuthenticated.next(true);
          this.userService.token.next(loggedInUser.token);
          // this.loading.dismiss();
          this.router.navigate(['/news']);
        },
        error => {
          // this.loading.dismiss();
          // this.presentToast(error);
        }
      );
    }
  }
}
