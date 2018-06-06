import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {SomethingToShow} from './recipes/something-to-show/something-to-show';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';

export const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent,
   children: [
     {path:'', component: SomethingToShow},
     {path:'new', component:RecipeEditComponent},
     {path: ':id', component: RecipeDetailComponent},
     {path: ':id/edit', component:RecipeEditComponent}
   ]},
  {path: 'shopping-list', component: ShoppingListComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouteModule{

}
