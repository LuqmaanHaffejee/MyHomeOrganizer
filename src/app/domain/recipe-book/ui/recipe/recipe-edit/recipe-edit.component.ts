import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Recipe } from "../../../model/recipe";
import { RecipeService } from "../../../services/recipe.service";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-recipe-edit',
  styleUrl: './recipe-edit.component.css',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit {

  route = inject(ActivatedRoute);
  router = inject(Router);

  fb = inject(FormBuilder);

  recipeService = inject(RecipeService);

  editMode: boolean;

  recipe: Recipe;

  recipeForm = this.fb.group({
    name: new FormControl<string>(null, Validators.required),
    description: new FormControl<string>(null, []),
    imagePath: new FormControl<string>(null, Validators.required),
    ingredients: new FormArray([])
  });

  ngOnInit(): void {
    this.route.data.subscribe(data => this.editMode = data.editMode);
    this.route.paramMap.subscribe(paramMap => {
      if (this.editMode === true) {
        this.recipe = this.recipeService.getRecipe(+paramMap.get('id'))
        this.recipeForm.patchValue(this.recipe);
        this.recipe.ingredients.forEach(ingredient => {
          const formGrp = new FormGroup({
            name: new FormControl(ingredient.name, Validators.required),
            amount: new FormControl(ingredient.amount, [Validators.required, Validators.min(1)]),
          });
          (<FormArray>this.recipeForm.get('ingredients')).push(formGrp);
        })
      }
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.recipeService.editRecipe({
        id: this.recipe.id,
        name: this.recipeForm.value.name,
        description: this.recipeForm.value.description,
        imagePath: this.recipeForm.value.imagePath,
        ingredients: this.recipeForm.value.ingredients,
      });
    } else {
      this.recipeService.addNewRecipe(new Recipe(
        this.recipeForm.value.name,
        this.recipeForm.value.description,
        this.recipeForm.value.imagePath,
        this.recipeForm.value.ingredients
      ));
    }
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  getIngredientControls() {
    return (<FormArray>this.recipeForm.get("ingredients")).controls;
  }

  onAddIngredient() {
    const newIngredientGroup = this.fb.group({
      name: new FormControl<string>(null, Validators.required),
      amount: new FormControl<number>(null, [Validators.required, Validators.min(1)]),
    });
    (<FormArray>this.recipeForm.get('ingredients')).push(newIngredientGroup);
  }

  onRemoveIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
