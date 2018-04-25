import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.services';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataStoreService {
    constructor(private _http: Http, private recipeService: RecipeService) { }

    storeRecipeData() {
        return this._http.put('https://recipe-book-b1add.firebaseio.com/recipes.json',
            this.recipeService.getRecipes());
    }

    getRecipeData() {
        this._http.get('https://recipe-book-b1add.firebaseio.com/recipes.json')
            .map(
                (response: Response) => {
                    const recipes: Recipe[] = response.json();
                    for (let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            console.log(recipe);
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }
            ).subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }
            );
    }
}
