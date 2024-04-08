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
import { ShoppingListService } from "./domain/shopping-list/services/shopping-list.service";
import { AppRoutesModule } from "./app-routes.module";
import { RecipeEditComponent } from "./domain/recipe-book/ui/recipe/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./domain/recipe-book/ui/recipe/recipe-start/recipe-start.component";

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
    DropdownDirective,
    RecipeEditComponent,
    RecipeStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutesModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
