import { Ingredients } from '../Shared/Ingredients.model';
import { Subject } from 'rxjs/Subject';

export class ShoppinglistServices {

    num: number;
    ingredientChanged = new Subject<Ingredients[]>();
    startEdit = new Subject<number>();

    private ingredients: Ingredients[] = [
        new Ingredients('Tomato', 5),
        new Ingredients('Capcicum', 2)
    ];

    getIngredientEdited(index: number) {
        return this.ingredients[index];
    }

    getIngredient() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredients) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    updateIngredient(i: number, newIngredient: Ingredients) {
        this.ingredients[i] = newIngredient;
        this.ingredientChanged.next(this.ingredients.slice());
    }

    deleteIngredient(i: number) {
        this.ingredients.splice(i, 1);
        this.ingredientChanged.next(this.ingredients.slice())
    }

    addToIngredients(ingredients: Ingredients[]) {
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}