import { Component, OnInit } from '@angular/core';
import {Ingredints} from '../shared/ingredints.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredints: Ingredints[];
  constructor(private shopppingService: ShoppingListService) { }

  ngOnInit() {
    this.ingredints = this.shopppingService.getIngredints();
    this.shopppingService.ingredintAdded.subscribe(
      (ingredints: Ingredints[]) => {
        this.ingredints = ingredints;
      }
    )
  }

}
