import { Component, ElementRef, inject, ViewChild } from "@angular/core";
import { ShoppingListService } from "../../../services/shopping-list.service";
import { Ingredient } from "../../../../../shared/model/ingredient";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-shopping-list-edit',
  styleUrl: './shopping-list-edit.component.css',
  templateUrl: './shopping-list-edit.component.html'
})
export class ShoppingListEditComponent {

  @ViewChild('formRef')
  formRef: NgForm;

  shoppingListService = inject(ShoppingListService);

  onAddIngredient() {
    const name: string = this.formRef.form.get('name').value;
    const amount: number = +this.formRef.form.get('amount').value;
    this.shoppingListService.addIngredient(new Ingredient(name, amount));
  }
}
