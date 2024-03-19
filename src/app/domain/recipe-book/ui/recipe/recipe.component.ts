import { Component } from '@angular/core';
import { Recipe } from "../../model/recipe";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {

  selectedRecipe: Recipe;

  onRecipeSelected($event: Recipe) {
    this.selectedRecipe = $event;
  }
}
