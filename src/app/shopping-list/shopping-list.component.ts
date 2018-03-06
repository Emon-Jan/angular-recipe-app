import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../Shared/Ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Tomato', 5),
    new Ingredients('Capcicum', 2),
  ];

  constructor() { }

  ngOnInit() {
  }

}
