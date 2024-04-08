import { Component, inject, OnInit } from '@angular/core';
import { Recipe } from '../../../model/recipe';
import { RecipeService } from "../../../services/recipe.service";
import { ShoppingListService } from "../../../../shopping-list/services/shopping-list.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {

  router = inject(Router);
  route = inject(ActivatedRoute);

  recipeService = inject(RecipeService);
  shoppingListService = inject(ShoppingListService);

  recipe: Recipe;

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.recipe = this.recipeService.getRecipe(+paramMap.get('id'));
    });
  }

  onAddToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['/recipes', this.recipe.id, 'edit']);
  }
}
