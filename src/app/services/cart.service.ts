import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../models/cart.model';
import { CartCategoryItems } from '../models/cart-category-items.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  defaultCart: Cart = {
    categoryItems: [] = []
  };

  private cartSource = new BehaviorSubject(this.defaultCart);
  currentCart = this.cartSource.asObservable();

  constructor() { }

  getCart() {
    let cart: Cart;
    this.currentCart.subscribe(currentCart => cart = currentCart);
    return cart;
  }

  getAllCategoryItems() {
    let cartItems: any[];
    this.currentCart.subscribe(currentCart => cartItems = currentCart.categoryItems);
    return cartItems;
  }

  getServiceBulkItems() {
    let bulkItems: any[];
    this.currentCart.subscribe(cart =>
       cart.categoryItems.some(el => el.category === 'bulk products') ?
        bulkItems = cart.categoryItems.filter(el => el.category === 'bulk products')[0].items :
        bulkItems = []
      );
    return bulkItems;
  }

  getServiceAfterSchoolItems() {
    let afterSchoolItems: any[];
    this.currentCart.subscribe(cart =>
       cart.categoryItems.some(el => el.category === 'after school products') ?
        afterSchoolItems = cart.categoryItems.filter(el => el.category === 'after school products')[0].items :
        afterSchoolItems = []
      );
    return afterSchoolItems;
  }

  getServiceChoiceItems() {
    let choiceItems: any[];
    this.currentCart.subscribe(cart =>
       cart.categoryItems.some(el => el.category === 'choice products') ?
        choiceItems = cart.categoryItems.filter(el => el.category === 'choice products')[0].items :
        choiceItems = []
      );
    return choiceItems;
  }

  getServiceDairyItems() {
    let dairyItems: any[];
    this.currentCart.subscribe(cart =>
       cart.categoryItems.some(el => el.category === 'dairy products') ?
        dairyItems = cart.categoryItems.filter(el => el.category === 'dairy products')[0].items :
        dairyItems = []
      );
    return dairyItems;
  }

  getServiceMeatItems() {
    let meatItems: any[];
    this.currentCart.subscribe(cart =>
       cart.categoryItems.some(el => el.category === 'meat products') ?
        meatItems = cart.categoryItems.filter(el => el.category === 'meat products')[0].items :
        meatItems = []
      );
    return meatItems;
  }

  updateServiceCart(cartItems: CartCategoryItems[]) {
    const cart = this.getCart();
    cart.categoryItems = cartItems;
    this.cartSource.next(cart);
  }

  resetCart() {
    const cart: Cart = {
      categoryItems: [] = []
    };
    this.cartSource.next(cart);
  }
}
