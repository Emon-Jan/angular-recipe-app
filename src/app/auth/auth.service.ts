import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

import * as firebase from "firebase";

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  registerUser(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => console.log("Error in register " + error));
    console.log("User Registered");
  }

  signinUser(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        // console.log(response)
        this.router.navigate(["/"]);
        firebase
          .auth()
          .currentUser.getToken()
          .then((tok: string) => (this.token = tok));
      });
  }

  getToken() {
    firebase
      .auth()
      .currentUser.getToken()
      .then((tok: string) => (this.token = tok));
    return this.token;
  }

  isAuthenticate() {
    return this.token != null;
  }

  logOut() {
    firebase.auth().signOut();
    this.token = null;
  }
}
