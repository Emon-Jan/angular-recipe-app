import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import "rxjs/Rx";

import { Recipe } from "./../recipes/recipe.model";
import { RecipeService } from "./../recipes/recipe.services";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStoreService {
  constructor(
    private _http: Http,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipeData() {
    const token = this.authService.getToken();
    return this._http.put(
      "https://recipe-book-b1add.firebaseio.com/recipes.json?auth=" + token,
      this.recipeService.getRecipes()
    );
  }

  getRecipeData() {
    const token = this.authService.getToken();
    this._http
      .get(
        "https://recipe-book-b1add.firebaseio.com/recipes.json?auth=" + token
      )
      .map((response: Response) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe["ingredients"]) {
            console.log(recipe);
            recipe["ingredients"] = [];
          }
        }
        return recipes;
      })
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
