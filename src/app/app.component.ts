import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  feature = 'recipe';

  constructor() { }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDyEAjN7W1BQoHZjZGW8c326XzBoXh1uQA',
      authDomain: 'recipe-book-b1add.firebaseapp.com'
    });
  }
  onNavigate(feature) {
    this.feature = feature;
  }
}
