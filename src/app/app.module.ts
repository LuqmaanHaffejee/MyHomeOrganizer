import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './domain/shopping-list/ui/shopping-list/shopping-list.component';
import {ShoppingListEditComponent} from "./domain/shopping-list/ui/shopping-list-edit/shopping-list-edit.component";
import {RecipeListComponent} from "./domain/recipe-book/ui/recipe-list/recipe-list.component";
import { RecipeItemComponent } from './domain/recipe-book/ui/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './domain/recipe-book/ui/recipe-detail/recipe-detail.component';
import { HeaderComponent } from "./shared/ui/header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
