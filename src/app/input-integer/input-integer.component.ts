import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Spare } from '../spare-list/Spare';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {

  constructor() {}

  @Input()
  quantity!: number;

  @Input()
  max! : number;

  @Output()
  quantityChange : EventEmitter<number> = new EventEmitter<number>;
  
  ngOnInit(): void {}

  upQuantity() {
    if(this.quantity < this.max){
      this.quantity++
      this.quantityChange.emit(this.quantity);
    }
  }

  downQuantity() {
    if(this.quantity > 0) {
      this.quantity --;
      this.quantityChange.emit(this.quantity);
    }
  }

}

