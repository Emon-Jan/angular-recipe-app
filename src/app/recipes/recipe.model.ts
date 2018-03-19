import { Ingredients } from "../Shared/Ingredients.model";

export class Recipe {
    public name: String;
    public description: String;
    public imgPath: String;
    public ingredients: Ingredients[];

    constructor(name: String, desc: String, imgPath: String, ingredients) {
        this.name = name;
        this.description = desc;
        this.imgPath = imgPath;
        this.ingredients = ingredients;
    }

}
