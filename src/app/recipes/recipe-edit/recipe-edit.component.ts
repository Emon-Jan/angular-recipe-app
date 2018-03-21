import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.services';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: Boolean = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeServe: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        console.log(this.editMode);
        this.initForm();
      }
    );
  }

  private initForm() {
    let recipeName: String = '';
    let recipeImgPath: String = '';
    let recipeDescription: String = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeServe.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImgPath = recipe.imgPath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount,
                [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imgPath': new FormControl(recipeImgPath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  onSubmit() {
    console.log(this.recipeForm);
    if (this.editMode) {
      this.recipeServe.updateRecipe(this.id, this.recipeForm.value);
    }
    else {
      this.recipeServe.addRecipe(this.recipeForm.value);
    }
    this.recipeForm.reset();
  }

  onDrop(i: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(i);
  }

  onCancel() {
    this.recipeForm.reset();
  }

  onAddNewIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null,
          [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

}
