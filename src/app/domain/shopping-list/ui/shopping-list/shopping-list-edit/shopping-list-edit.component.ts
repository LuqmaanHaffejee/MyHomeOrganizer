import { Component, inject, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { ShoppingListService } from "../../../services/shopping-list.service";
import { Ingredient } from "../../../../../shared/model/ingredient";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-shopping-list-edit',
  styleUrl: './shopping-list-edit.component.css',
  templateUrl: './shopping-list-edit.component.html'
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {

  editMode = false;

  @ViewChild('formRef')
  formRef: NgForm;

  shoppingListService = inject(ShoppingListService);

  subs: Subscription[] = [];

  private selectedIngredient: Ingredient;

  onSubmit() {
    const name: string = this.formRef.value.name;
    const amount: number = +this.formRef.value.amount;
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.selectedIngredient.id, name, amount);
    } else {
      this.shoppingListService.addIngredient(name, amount);
    }
    this.formRef.form.reset();
    this.editMode = false;
  }

  ngOnInit(): void {
    const sub = this.shoppingListService.selectedIngredient$.subscribe(ingredient => {
      this.editMode = true;
      this.selectedIngredient = ingredient;
      this.formRef.form.setValue({id: ingredient.id, name: ingredient.name, amount: ingredient.amount});
    });
    this.subs.push(sub);
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.selectedIngredient.id);
    this.formRef.form.reset();
    this.editMode = false;
  }

  onClear() {
    this.formRef.form.reset();
    this.editMode = false;
  }
}
