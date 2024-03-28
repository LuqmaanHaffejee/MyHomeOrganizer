import { Component, EventEmitter, inject, Output } from "@angular/core";
import { Recipe } from "../../../model/recipe";
import { RecipeService } from "../../../services/recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {

  recipeService = inject(RecipeService);

  recipes = this.recipeService.getRecipes();

  onRecipeClick(id: number) {
    this.recipeService.setSelectedRecipe(id);
  }
}

