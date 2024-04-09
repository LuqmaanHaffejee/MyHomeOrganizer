import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ShoppingListService } from "../../services/shopping-list.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
  providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  shoppingListService = inject(ShoppingListService);

  ingredients = this.shoppingListService.getIngredients();

  subs: Subscription[] = [];

  ngOnInit(): void {
    const subscription = this.shoppingListService.ingredientAddedSubject.subscribe(ingredients =>
      this.ingredients = ingredients
    );
    this.subs.push(subscription);
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
