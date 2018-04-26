import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('f') registerForm: NgForm;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignUp() {
    // console.log(this.registerForm.value);
    const email: string = this.registerForm.value.email;
    const password: string = this.registerForm.value.password;
    this.authService.registerUser(email, password);
  }

}
