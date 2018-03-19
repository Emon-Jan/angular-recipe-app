import { Component, OnInit } from '@angular/core';

import { Ingredients } from '../Shared/Ingredients.model';
import { ShoppinglistServices } from './shopping-list.services';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[];

  constructor(private slService: ShoppinglistServices) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredient();
    this.slService.ingredientChanged.subscribe(
      (ingredients: Ingredients[]) => {
        this.ingredients = ingredients;
      }
    );
  }

}
