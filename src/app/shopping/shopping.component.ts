import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  ingredients: Ingredient[]= [
    new Ingredient('Cool Drink', 20),
    new Ingredient('Ketchup', 10)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
