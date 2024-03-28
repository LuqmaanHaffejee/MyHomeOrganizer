import { Recipe } from "../model/recipe";
import { EventEmitter } from "@angular/core";

export class RecipeService {

  private recipes: Recipe[] = [
    {
      name: 'Cake',
      description: 'Chocolate Flavour',
      imagePath: 'https://soetcakes.co.za/cdn/shop/products/IMG_3309_5000x.jpg?v=1669139664',
      ingredients: [
        {name: 'Flour', amount: 2},
        {name: 'Cocoa Powder', amount: 1},
        {name: 'Butter', amount: 1},
      ]
    },
    {
      name: 'Creamy chicken',
      description: '',
      imagePath: 'https://images.immediate.co.uk/production/volatile/sites/30/2022/04/Air-Fryer-Chicken-Thighs-d4575b2.jpg',
      ingredients: [
        {name: 'Chicken', amount: 2},
        {name: 'Sour Cream', amount: 1},
        {name: 'Sauce', amount: 5},
      ]
    }
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }

  setSelectedRecipe(id: number) {
    this.recipeSelected.emit(this.recipes[id]);
  }

}
