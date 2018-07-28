import { AuthService } from "./../auth/auth.service";
import { DataStoreService } from "./../Shared/data-store.service";
import { Component, EventEmitter, Output } from "@angular/core";
import { Response } from "@angular/http";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<String>();

  constructor(
    private dataStore: DataStoreService,
    public authService: AuthService
  ) {}

  onSelect(feature: String) {
    this.featureSelected.emit(feature);
  }

  onSave() {
    this.dataStore.storeRecipeData().subscribe(
      (response: Response) => {
        console.log(response);
      },
      error => {
        console.log("Error in getting data " + error);
      }
    );
  }

  onGet() {
    this.dataStore.getRecipeData();
  }

  onLogout() {
    this.authService.logOut();
  }
}
