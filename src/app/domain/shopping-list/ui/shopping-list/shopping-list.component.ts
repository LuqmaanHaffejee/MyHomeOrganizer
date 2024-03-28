import { Component, inject, OnInit } from '@angular/core';
import { ShoppingListService } from "../../services/shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
  providers: []
})
export class ShoppingListComponent implements OnInit {

  shoppingListService = inject(ShoppingListService);

  ingredients = this.shoppingListService.getIngredients();

  ngOnInit(): void {
    this.shoppingListService.ingredientAdded.subscribe(ingredients => this.ingredients = ingredients);
  }
}
