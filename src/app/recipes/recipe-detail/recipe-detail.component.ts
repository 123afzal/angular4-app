import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params, Route, Router} from '@angular/router';
import {query} from '@angular/core/src/animation/dsl';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id;
  constructor(private recipeService: RecipeService,
             private router: Router
             ,private route: ActivatedRoute) { }

  ngOnInit() {
    //one way to retrieve query/params

    // this.id = this.route.snapshot.params['id'];

    // second way to get query/params

    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      })
  }

  onAddtoShoppingList(){
    this.recipeService.addIngredintsToShoppingList(this.recipe.ingredints);
  }
  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route})
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route})
  }

}
