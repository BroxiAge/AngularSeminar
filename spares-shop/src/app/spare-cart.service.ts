import { Injectable } from '@angular/core';
import { Spare } from './spare-list/Spare';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**
 * Maneja la logica del carrito
 * 
 */
export class SpareCartService {
  private _cartList: Spare[] = [];
  cartList: BehaviorSubject<Spare[]> = new BehaviorSubject(this._cartList);
  
  constructor() { }
  
  addToCart(spare: Spare) {
    let item: Spare | undefined = this._cartList.find(x => x.model == spare.model)
    if (!item) {
      this._cartList.push({... spare});
    } else {
      item.quantity += spare.quantity;
      console.log(`El repuesto de la marca ${spare.brand} ya está en el carrito.`);
    }
  console.log(this._cartList);
  this.cartList.next(this._cartList)
}
}
