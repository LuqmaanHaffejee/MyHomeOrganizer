import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Recipe } from "../../../model/recipe";
import { RecipeService } from "../../../services/recipe.service";

@Component({
  selector: 'app-recipe-edit',
  styleUrl: './recipe-edit.component.css',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit {

  route = inject(ActivatedRoute);

  recipeService = inject(RecipeService);

  editMode: boolean;

  recipe: Recipe;

  ngOnInit(): void {
    this.route.data.subscribe(data => this.editMode = data.editMode);
    this.route.paramMap.subscribe(paramMap => {
      if (this.editMode === true) {
        this.recipe = this.recipeService.getRecipe(+paramMap.get('id'))
      }
      console.log(this.recipe);
    });
  }

}
