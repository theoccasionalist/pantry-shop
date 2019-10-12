import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Cart } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';
import { Family } from '../../models/family.model';
import { FamilyService } from '../../services/family.service';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { HttpClient } from '@angular/common/http';
import { CartItemsByType } from 'src/app/models/cart-items-by-type.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart;
  cartTypes: any[] = [];
  columns: string[] = ['column1', 'column2'];
  family: Family;
  @Input() pickUpDate;
  panelOpenState = false;
  uri = 'http://localhost:4000';
  totals = [];

  constructor(private cartService: CartService, private familyService: FamilyService,
              private httpClient: HttpClient,  private router: Router) { }

  ngOnInit() {
    this.familyService.getFamily().subscribe(currentFamily => this.family = currentFamily);
    this.cartService.getCart().subscribe(currentCart => {
        this.cart = currentCart;
        this.sortCart();
        this.setTotals();
        console.log(this.cart);
    });
  }

  sortCart() {
    this.cart.cartItemsByType.sort((before, after) => before.typeName.trim().toLowerCase() > after.typeName.trim().toLowerCase() ? 1 : -1);
    this.cart.cartItemsByType.forEach(type => {
      type.items.sort((before, after) => before.productName.trim().toLowerCase() > after.productName.trim().toLowerCase() ? 1 : -1);
    });
  }

  setTotals() {
    this.cart.cartItemsByType.forEach(type => {
      this.totals.push({[type.typeId] : type.items.map(item => item.amount).reduce((acc, value) => acc + value)});
    });
  }

  onBackToCart() {
    this.router.navigate([`/shop`]);
  }

  createOrder() {
      const order = new Order();
      order.family = this.family;
      order.cart = this.cart;
      order.pickUpDate = 'whenever';
      console.log(order);
      return order;
  }

  onSubmitOrder() {
    console.log(this.httpClient.post(`${this.uri}/orders`, this.createOrder()));
    this.httpClient.post(`${this.uri}/orders`, {order: this.createOrder()}).subscribe(() =>
      this.router.navigate([`/`])
    );
    this.cart = {
      cartItemsByType: []
    };
    this.cartService.updateCart(this.cart);
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    $event.returnValue = true;
  }
}
