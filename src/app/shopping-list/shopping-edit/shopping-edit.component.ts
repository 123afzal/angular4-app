import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredints} from '../../shared/ingredints.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  constructor(private  shoppingListService: ShoppingListService) { }

  itemAdded() {
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    const ingredint = new Ingredints(name, amount);
    this.shoppingListService.addIngredint(ingredint);
  }

  ngOnInit() {
  }

}
