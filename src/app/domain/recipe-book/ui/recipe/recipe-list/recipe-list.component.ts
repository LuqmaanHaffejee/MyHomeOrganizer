import { Component, inject } from "@angular/core";
import { RecipeService } from "../../../services/recipe.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {

  recipeService = inject(RecipeService);

  recipes = this.recipeService.getRecipes();

  route = inject(ActivatedRoute);

}

