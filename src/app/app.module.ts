import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './domain/shopping-list/ui/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from "./domain/shopping-list/ui/shopping-list/shopping-list-edit/shopping-list-edit.component";
import { RecipeListComponent } from "./domain/recipe-book/ui/recipe/recipe-list/recipe-list.component";
import { RecipeItemComponent } from './domain/recipe-book/ui/recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './domain/recipe-book/ui/recipe/recipe-detail/recipe-detail.component';
import { HeaderComponent } from "./shared/ui/header/header.component";
import { RecipeComponent } from './domain/recipe-book/ui/recipe/recipe.component';
import { FormsModule } from "@angular/forms";
import { DropdownDirective } from "./shared/directives/dropdown.directive";

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipeComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
