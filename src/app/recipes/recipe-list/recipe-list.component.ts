import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() itemWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test 1', 'This is a test(1) description.',
      'https://assets.materialup.com/uploads/d2feb47f-3d3c-4b05-8673-a2886e5f6aca/preview'),
    new Recipe('Test 2', 'This is a test(2) description.',
      'https://assets.materialup.com/uploads/d2feb47f-3d3c-4b05-8673-a2886e5f6aca/preview'),
    new Recipe('Test 3', 'This is a test(3) description.',
      'https://assets.materialup.com/uploads/d2feb47f-3d3c-4b05-8673-a2886e5f6aca/preview')
  ];

  constructor() { }

  ngOnInit() {
  }

  onItemSelected(recipe: Recipe) {
    this.itemWasSelected.emit(recipe);
  }

}
