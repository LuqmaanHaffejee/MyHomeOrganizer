import { Ingredient } from "../../../shared/model/ingredient";
import { Subject } from "rxjs";

export class ShoppingListService {

  private ingredients: Ingredient[] = [];

  ingredientAddedSubject = new Subject<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAddedSubject.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientAddedSubject.next(this.ingredients.slice());
  }
}
