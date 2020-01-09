import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItemsByType } from '../models/cart-items-by-type.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: CartItemsByType[] = [];

  private cartSource = new BehaviorSubject(this.cart);
  currentCart = this.cartSource.asObservable();

  constructor() { }

  getCart(): Observable<CartItemsByType[]> {
    return this.currentCart;
  }

  resetCart() {
    const defaultCart: CartItemsByType[] = [];
    this.cartSource.next(defaultCart);
  }

  updateCart(cart: CartItemsByType[]): void {
    this.cartSource.next(cart);
  }
}
