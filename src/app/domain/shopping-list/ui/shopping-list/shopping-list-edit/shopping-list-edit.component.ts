import { Component, ElementRef, inject, ViewChild } from "@angular/core";
import { ShoppingListService } from "../../../services/shopping-list.service";

@Component({
  selector: 'app-shopping-list-edit',
  styleUrl: './shopping-list-edit.component.css',
  templateUrl: './shopping-list-edit.component.html'
})
export class ShoppingListEditComponent {

  shoppingListService = inject(ShoppingListService);

  @ViewChild('nameInput')
  nameInput: ElementRef;

  @ViewChild('amountInput')
  amountInput: ElementRef;

  onAddIngredient() {
    const name: string = this.nameInput.nativeElement.value;
    const amount: number = this.amountInput.nativeElement.value;
    this.shoppingListService.addIngredient(name, amount);
  }
}
