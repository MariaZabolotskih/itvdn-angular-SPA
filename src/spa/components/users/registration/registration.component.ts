import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'spa-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registering = false;
  hasAdded = false;
  formError: string;
  constructor(/*private router: Router, private userApi: UserApi*/) { }
  onSubmit(registerForm: NgForm) {
    /*this.registering = true;
    this.userApi.registerUser(registerForm.value).subscribe(() => {
      setTimeout(() => {this.hasAdded = true; }, 1200);
      setTimeout(() => {this.router.navigate(['/sign-in']); }, 2000);
    });*/
  }
  
  ngOnInit() {
  }

}
