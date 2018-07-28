import { Component, OnInit, OnDestroy } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.services";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { DataStoreService } from "../../Shared/data-store.service";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  recipes: Recipe[];

  constructor(
    private recipeService: RecipeService,
    private dataService: DataStoreService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.recipeService.recipeChanged.subscribe(
      (recipe: Recipe[]) => {
        this.recipes = recipe;
      }
    );
    if (this.authService.isAuthenticate()) {
      this.dataService.getRecipeData();
    } else {
      this.recipes = this.recipeService.getRecipes();
    }
  }

  onNewRecipe() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
