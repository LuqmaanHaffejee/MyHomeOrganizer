import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Output('recipePageSelected')
  recipeClicked = new EventEmitter<void>();

  @Output('shoppingListPageSelected')
  shoppingListClicked = new EventEmitter<void>();

  onRecipeClick() {
    this.recipeClicked.emit();
  }

  onShoppingListClick() {
    this.shoppingListClicked.emit();
  }
}
