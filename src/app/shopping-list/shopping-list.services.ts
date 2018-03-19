import { Ingredients } from '../Shared/Ingredients.model';
import { EventEmitter } from '@angular/core';

export class ShoppinglistServices {

    num: number;
    ingredientChanged = new EventEmitter<Ingredients[]>();

    private ingredients: Ingredients[] = [
        new Ingredients('Tomato', 5),
        new Ingredients('Capcicum', 2)
    ];

    getIngredient() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredients) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addToIngredients(ingredients: Ingredients[]) {
        for (let ingredient of ingredients) {
            this.addIngredient(ingredient);
        }
        // this.ingredients.push(...ingredients);
        // this.ingredientChanged.emit(this.ingredients.slice());
    }
}