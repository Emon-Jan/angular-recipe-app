import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredients } from '../Shared/Ingredients.model';
import { ShoppinglistServices } from '../shopping-list/shopping-list.services';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('Chicken Sausage Pizzas',
            'Put down the phone: this pizza night is all about creating a masterful pie on your own terms.',
            'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_80,w_auto:100:1280/v1/hellofresh_s3/image/chicken-sausage-pizzas-13655da0.jpg',
            [new Ingredients('Sweet Italian Chicken Sausage', 9), new Ingredients('Mozzarella Cheese', 1)]),
        new Recipe('Steakhouse-Style New York Strip',
            'Get your sharpest knives out and tuck your napkin in like a bib: this is steak like they serve.',
            'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_80,w_auto:100:1280/v1/hellofresh_s3/image/5a8f0f25ae08b52e8f500a82-258967c5.jpg',
            [new Ingredients('New York Strip Steak', 12), new Ingredients('Fingerling Potatoes', 12)]),
        new Recipe('One-Pan Orzo Italiano',
            'Pasta night just got so easy, you can make some delicious rice with italian chicken.',
            'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_80,w_auto:100:1280/v1/hellofresh_s3/image/5a8f100aae08b52f3c24a0b2-516fcaf8.jpg',
            [new Ingredients('Chicken Stock Concentrate', 2), new Ingredients('Italian Chicken Sausage', 12)]),
        new Recipe('Creamy Shrimp Tagliatelle',
            'Pronto! Pronto! You can make this recipe with the lightning speed of an Italian race car.',
            'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_80,w_auto:100:1280/v1/hellofresh_s3/image/5a8f0fcbae08b52f161b5832-033c9a4a.jpg',
            [new Ingredients('Shrimp', 10), new Ingredients('Tagliatelle Pasta', 3)])
    ];

    constructor(private slService: ShoppinglistServices) { }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngreToShoppingList(ingredients: Ingredients[]) {
        this.slService.addToIngredients(ingredients);
    }

    addRecipe(newRecipe: Recipe) {
        this.recipes.push(newRecipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(i: number, newRecipe: Recipe) {
        this.recipes[i] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(i: number) {
        this.recipes.splice(i, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
}