import { Component } from '@angular/core';
import { SpareCartService } from '../spare-cart.service';
import { Spare } from '../spare-list/Spare';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartList: Spare[] | undefined;

  constructor(private cart: SpareCartService){
    cart.cartList.subscribe(c => this.cartList = c)
  }
}
