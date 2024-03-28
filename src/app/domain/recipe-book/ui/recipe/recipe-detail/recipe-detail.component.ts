import { Component, inject, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../model/recipe';
import { RecipeService } from "../../../services/recipe.service";
import { ShoppingListService } from "../../../../shopping-list/services/shopping-list.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {

  recipeService = inject(RecipeService);

  shoppingListService = inject(ShoppingListService);

  recipe: Recipe;

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(recipe => this.recipe = recipe);
  }

  onAddToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }
}
