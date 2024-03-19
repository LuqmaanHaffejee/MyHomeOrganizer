import { Component, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../../../model/recipe";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {

  @Output()
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("Cake", "Chocolate Flavour", "data:image/jpeg;base64,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"),
    new Recipe("Chicken", "Creamy chicken", "data:image/jpeg;base64,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"),
  ];

  onRecipeClick(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}

