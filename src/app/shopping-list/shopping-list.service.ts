import {Ingredints} from '../shared/ingredints.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  public ingredintAdded = new EventEmitter<Ingredints[]>();
  private ingredints : Ingredints[] = [
    new Ingredints('Apple', 5),
    new Ingredints('Mango', 10),
    new Ingredints('Banana', 1)
  ];

  getIngredints() {
    return this.ingredints.slice();
  }

  addIngredint(ingredint : Ingredints) {
    this.ingredints.push(ingredint);
    this.ingredintAdded.emit(this.ingredints.slice());
  }

  addIngredints(ingredints : Ingredints[]){
    this.ingredints.push(...ingredints);
    this.ingredintAdded.emit(this.ingredints.slice());
  }
}
