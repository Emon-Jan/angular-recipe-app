import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent implements OnInit {
  @ViewChild("f") signinForm: NgForm;
  alertMsg: Boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onSignIn() {
    const email: string = this.signinForm.value.email;
    const password: string = this.signinForm.value.password;
    try {
      this.authService.signinUser(email, password);
    } catch (error) {
      console.log("From signin: " + error);
    }
    // console.log("From signin: " + err);
    // if (err != null) {
    //   this.alertMsg = true;
    // }
  }
}
