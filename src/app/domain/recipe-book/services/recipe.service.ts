import { Recipe } from "../model/recipe";

export class RecipeService {

  private recipes: Recipe[] = [
    {
      id: 0,
      name: 'Cake',
      description: 'Chocolate Flavour',
      imagePath: 'https://soetcakes.co.za/cdn/shop/products/IMG_3309_5000x.jpg?v=1669139664',
      ingredients: [
        {id: 0, name: 'Flour', amount: 2},
        {id: 1, name: 'Cocoa Powder', amount: 1},
        {id: 2, name: 'Butter', amount: 1},
      ]
    },
    {
      id: 1,
      name: 'Creamy chicken',
      description: '',
      imagePath: 'https://images.immediate.co.uk/production/volatile/sites/30/2022/04/Air-Fryer-Chicken-Thighs-d4575b2.jpg',
      ingredients: [
        {id: 3, name: 'Chicken', amount: 2},
        {id: 4, name: 'Sour Cream', amount: 1},
        {id: 5, name: 'Sauce', amount: 5},
      ]
    }
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes.filter(recipe => recipe.id === id)[0];
  }

}
