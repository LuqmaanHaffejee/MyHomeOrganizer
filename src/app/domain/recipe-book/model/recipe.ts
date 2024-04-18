import { Ingredient } from "../../../shared/model/ingredient";

export class Recipe {

  private static maxId: number = 0;

  id: number = ++Recipe.maxId;

  name: string;

  description: string;

  imagePath: string;

  ingredients: Ingredient[] = [];

  constructor(name: string, description: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients.slice();
  }

}
