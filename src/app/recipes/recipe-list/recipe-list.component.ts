import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test', 'This is a test description.',
      'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails' +
      '/quizzes/fast_food_smarts_rmq/650x350_fast_food_smarts_rmq.jpg'),
    new Recipe('Test', 'This is a test description.',
      'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails' +
      '/quizzes/fast_food_smarts_rmq/650x350_fast_food_smarts_rmq.jpg'),
    new Recipe('Test', 'This is a test description.',
      'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails' +
      '/quizzes/fast_food_smarts_rmq/650x350_fast_food_smarts_rmq.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
