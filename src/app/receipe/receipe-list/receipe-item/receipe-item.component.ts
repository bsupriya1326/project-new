import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Receipe } from '../../receipe.model';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {
 @Input() recipe:Receipe;
 @Output() recipeSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
    
  }
  onSelect(){
    this.recipeSelected.emit();
  }

}
