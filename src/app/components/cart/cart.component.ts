import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '../../models/cart.model';
import { CartCategoryItems } from '../../models/cart-category-items.model';
import { CartService } from '../../services/cart.service';
import { Family } from '../../models/family.model';
import { FamilyService } from '../../services/family.service';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  family: Family;
  cart: Cart;
  @Input() pickUpDate;
  cartItems: CartCategoryItems[];
  bulkItems: any[];
  afterSchoolItems: any[];
  choiceItems: any[];
  panelOpenState = false;
  displayedColumns: string[] = ['name'];
  displayedColumns2: string[] = ['name', 'amount'];
  displayedColumns3: string[] = ['name', 'amount'];
  uri = 'http://localhost:4000';

  constructor(private cartService: CartService, private familyService: FamilyService,
              private httpClient: HttpClient,  private router: Router) { }

  ngOnInit() {
    this.family = this.familyService.getFamily();
    this.cart = this.cartService.getCart();
    this.cartItems = this.cartService.getAllCategoryItems();
    this.bulkItems = this.cartService.getServiceBulkItems();
    this.afterSchoolItems = this.cartService.getServiceAfterSchoolItems();
    this.choiceItems = this.cartService.getServiceChoiceCart();
    console.log(this.cart);
  }

  onBackToCart() {
    this.router.navigate([`/shop`]);
  }

  createOrder() {
      const order = new Order();
      order.family = this.family;
      order.cart = this.cart.categoryItems;
      order.pickUpDate = 'whenever';
      console.log(order);
      return order;
  }

  onSubmitOrder() {
    console.log(this.httpClient.post(`${this.uri}/orders`, this.createOrder()));
    this.httpClient.post(`${this.uri}/orders`, this.createOrder()).subscribe(() =>
      this.router.navigate([`/`])
    );
    this.cartService.resetCart();
  }
}
