import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ingredients } from '../../Shared/Ingredients.model';
import { ShoppinglistServices } from '../shopping-list.services';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('obj') slItem: NgForm;

  subcription: Subscription;
  editMode: Boolean = false;
  itemEditIndex: number;
  editedItem: Ingredients;

  constructor(private slService: ShoppinglistServices) { }

  ngOnInit() {
    this.subcription = this.slService.startEdit.subscribe(
      (index: number) => {
        this.itemEditIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredientEdited(index);
        this.slItem.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  onAddItem(form: NgForm) {
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    const value = form.value;
    const newIngredient = new Ingredients(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.itemEditIndex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slItem.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteIngredient(this.itemEditIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

  // onDelItem() {
  //   const ingName = this.nameInputRef.nativeElement.value;
  //   const ingAmount = this.amountInputRef.nativeElement.value;
  //   const newIngredient = new Ingredients(ingName, ingAmount);
  //   this.slService.addIngredient(newIngredient);
  // }

}
