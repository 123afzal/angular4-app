import {Recipe} from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Recipe Test', 'So tasety', 'http://www.cooktube.in/wp-content/uploads/2017/08/mutton-biryani.jpg'),
    new Recipe('Recipe Test', 'So tasety', 'http://www.cooktube.in/wp-content/uploads/2017/08/mutton-biryani.jpg'),
    new Recipe('Recipe Test', 'So tasety', 'http://www.cooktube.in/wp-content/uploads/2017/08/mutton-biryani.jpg'),
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
