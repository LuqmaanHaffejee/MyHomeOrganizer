import { Ingredient } from "../../../shared/model/ingredient";
import { map, Subject } from "rxjs";

export class ShoppingListService {

  private ingredients: Ingredient[] = [];

  ingredientAddedSubject = new Subject<Ingredient[]>();

  selectedIngredientIdSubject = new Subject<number>();

  selectedIngredient$ = this.selectedIngredientIdSubject.asObservable().pipe(
    map(id => this.ingredients.filter(ing => ing.id === id)[0])
  );

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(name: string, amount: number) {
    this.ingredients.push(new Ingredient(name, amount));
    this.ingredientAddedSubject.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    ingredients.forEach(ingredient => this.addIngredient(ingredient.name, ingredient.amount));
  }

  updateIngredient(id: number, name: string, amount: number) {
    const ingredient = this.ingredients.filter(ing => ing.id === id)[0];
    ingredient.name = name;
    ingredient.amount = amount;
    this.ingredientAddedSubject.next(this.ingredients.slice());
  }

  deleteIngredient(id: number) {
    const index = this.ingredients.findIndex(i => i.id === id);
    this.ingredients.splice(index, 1);
    this.ingredientAddedSubject.next(this.ingredients.slice());
  }
}
