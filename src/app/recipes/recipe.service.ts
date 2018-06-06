import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredints} from '../shared/ingredints.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  public selectedRecipe = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Recipe Test',
      'Bamboo Briyani',
      'http://www.cooktube.in/wp-content/uploads/2017/08/mutton-biryani.jpg',
      [
        new Ingredints('Meat', 2),
        new Ingredints('Rice', 5)
        ]),
    new Recipe(
      'Recipe Test',
      'Big Bang',
      'http://winghartburgers.com/wp-content/uploads/2015/12/hi-res-burger-image-e1449150877809.jpg',
      [
        new Ingredints('Cheese', 10),
        new Ingredints('Bum', 1)
        ]),
    new Recipe(
      'Recipe Test',
      'Pathaka Fries',
      'https://media.thecapitalburger.com/images/site/photos/fries-920x500.jpg',
      [
        new Ingredints('Potatoe', 10),
          new Ingredints('Oil', 2)
        ]),
  ];

  constructor (private shoppingListService : ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  addIngredintsToShoppingList(ingredints: Ingredints[]){
    this.shoppingListService.addIngredints(ingredints);
  }
}
