import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeComponent } from "./domain/recipe-book/ui/recipe/recipe.component";
import { ShoppingListComponent } from "./domain/shopping-list/ui/shopping-list/shopping-list.component";
import { RecipeDetailComponent } from "./domain/recipe-book/ui/recipe/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./domain/recipe-book/ui/recipe/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./domain/recipe-book/ui/recipe/recipe-start/recipe-start.component";

export const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {
    path: 'recipes', component: RecipeComponent,
    children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent, data: {editMode: false}},
      {path: ':id/details', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent, data: {editMode: true}},
    ]
  },
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule {

}
