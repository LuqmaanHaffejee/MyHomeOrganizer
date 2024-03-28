import { Ingredient } from "../../../shared/model/ingredient";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {

  private ingredients: Ingredient[] = [];

  ingredientAdded = new EventEmitter<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(name: string, amount: number) {
    this.ingredients.push(new Ingredient(name, amount));
    this.ingredientAdded.emit(this.ingredients.slice());
  }

}
