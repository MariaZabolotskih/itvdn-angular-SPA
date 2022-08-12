import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserApi } from '../user-api';

@Component({
  selector: 'spa-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  submitting = false;
  formError: string;
  constructor(private userApi: UserApi, private router: Router) {}

  onSubmit(signInForm: NgForm): void {
    if (signInForm.valid) {
      this.submitting = true;
      this.formError = null;
      this.userApi
        .signIn(signInForm.value.email, signInForm.value.password)
        .subscribe({
          next: (data) => {
            console.log(data);
            this.router.navigate(['/authenticated']);
          },
          error: (error) => {
            this.submitting = false;
            this.formError = error;
          }
        });
    }
  }

  ngOnInit() {}
}
