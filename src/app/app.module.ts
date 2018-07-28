import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { AuthModule } from "./auth/auth.module";
import { SharedModule } from "./Shared/shared.module";
import { ShoppingListModule } from "./shopping-list/shopping-list.module";
import { AppComponent } from "./app.component";
import { AppRouteModule } from "./app-routing.module";
import { HeaderComponent } from "./Header/header.component";
import { HomeComponent } from "./home/home.component";

import { ShoppinglistServices } from "./shopping-list/shopping-list.services";
import { RecipeService } from "./recipes/recipe.services";
import { DataStoreService } from "./Shared/data-store.service";
import { AuthService } from "./auth/auth.service";

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    ShoppingListModule,
    AppRouteModule,
    AuthModule
  ],
  providers: [
    ShoppinglistServices,
    RecipeService,
    DataStoreService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
