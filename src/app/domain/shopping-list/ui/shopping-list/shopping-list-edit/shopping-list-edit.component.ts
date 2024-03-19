import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { Ingredient } from "../../../../../shared/model/ingredient";

@Component({
  selector: 'app-shopping-list-edit',
  styleUrl: './shopping-list-edit.component.css',
  templateUrl: './shopping-list-edit.component.html'
})
export class ShoppingListEditComponent {

  @ViewChild('nameInput')
  nameInput: ElementRef;

  @ViewChild('amountInput')
  amountInput: ElementRef;

  @Output()
  ingredientAdded = new EventEmitter<Ingredient>();

  onAddIngredient() {
    const name: string = this.nameInput.nativeElement.value;
    const amount: number = this.amountInput.nativeElement.value;
    this.ingredientAdded.emit(new Ingredient(name, amount));
  }
}
