import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart = {
    familyName: null,
    cartItemsByType: []
  };

  private cartSource = new BehaviorSubject(this.cart);
  currentCart = this.cartSource.asObservable();

  constructor() { }

  getCart(): Observable<Cart> {
    return this.currentCart;
  }

  updateCart(cart: Cart) {
    this.cartSource.next(cart);
  }
}
