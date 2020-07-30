import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import{Receipe} from '../receipe.model';
import { from } from 'rxjs';
@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Receipe>();
  receipes: Receipe[] = [
    new Receipe('Burger', 'Junk food',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQntnlkxdumQyLYIbd0LKNM2Eg41-M4BL23jQ&usqp=CAU'),
  
  new Receipe('Pizza', 'junk food',
  'https://live.staticflickr.com/3366/3413907349_1a541be4f0_n.jpg')
];

  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Receipe){
  this.recipeWasSelected.emit(recipe);

  }
}
