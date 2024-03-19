import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  recipePageSelected: boolean;

  shoppingListPageSelected: boolean;

  onRecipePageSelected() {
    this.shoppingListPageSelected = false;
    this.recipePageSelected = true;
  }

  onShoppingListPageSelected() {
    this.recipePageSelected = false;
    this.shoppingListPageSelected = true;
  }

}
