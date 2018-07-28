import { Component, OnInit, OnDestroy } from "@angular/core";

import { Ingredients } from "../Shared/Ingredients.model";
import { ShoppinglistServices } from "./shopping-list.services";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredients[];
  subscription: Subscription;

  constructor(private slService: ShoppinglistServices) {}

  ngOnInit() {
    this.ingredients = this.slService.getIngredient();
    this.subscription = this.slService.ingredientChanged.subscribe(
      (ingredients: Ingredients[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onItemSelected(index: number) {
    this.slService.startEdit.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
