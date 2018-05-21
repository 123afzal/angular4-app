import { Component, OnInit } from '@angular/core';
import {Ingredints} from '../shared/ingredints.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredints: Ingredints[]= [
    new Ingredints('Apple', 5),
    new Ingredints('Mango', 10),
    new Ingredints('Banana', 1)
  ]
  constructor() { }

  itemWasAdded(ingredint: Ingredints) {
    this.ingredints.push(ingredint);
  }

  ngOnInit() {
  }

}
