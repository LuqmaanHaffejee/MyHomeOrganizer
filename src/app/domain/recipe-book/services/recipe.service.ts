import { Recipe } from "../model/recipe";
import { Injectable } from "@angular/core";
import { map, Observable, of, startWith, Subject, switchMap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Cake',
      'Chocolate Flavour',
      'https://soetcakes.co.za/cdn/shop/products/IMG_3309_5000x.jpg?v=1669139664',
      [
        {id: 0, name: 'Flour', amount: 2},
        {id: 1, name: 'Cocoa Powder', amount: 1},
        {id: 2, name: 'Butter', amount: 1},
      ]
    ),
    new Recipe(
      'Creamy chicken',
      'Creamy, saucy, tasty',
      'https://images.immediate.co.uk/production/volatile/sites/30/2022/04/Air-Fryer-Chicken-Thighs-d4575b2.jpg',
      [
        {id: 3, name: 'Chicken', amount: 2},
        {id: 4, name: 'Sour Cream', amount: 1},
        {id: 5, name: 'Sauce', amount: 5},
      ]
    )
  ];

  private recipesUpdatedSubject = new Subject<void>();

  recipes$: Observable<Recipe[]> = this.recipesUpdatedSubject.asObservable().pipe(
    startWith(this.recipes),
    map(() => this.recipes)
  );

  getRecipe(id: number): Recipe {
    return this.recipes.filter(recipe => recipe.id === id)[0];
  }

  addNewRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesUpdatedSubject.next();
  }

  editRecipe(recipe: Recipe) {
    const index = this.recipes.findIndex(r => r.id === recipe.id);
    this.recipes[index] = recipe;
    this.recipesUpdatedSubject.next();
  }

  deleteRecipe(id: number) {
    const index = this.recipes.findIndex(r => r.id === id);
    this.recipes.splice(index, 1);
    this.recipesUpdatedSubject.next();
  }
}
