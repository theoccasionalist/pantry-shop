import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Cart } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';
import { Family } from '../../models/family.model';
import { FamilyService } from '../../services/family.service';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { HttpClient } from '@angular/common/http';
import { CartItemsByType } from 'src/app/models/cart-items-by-type.model';
import { MatDialog } from '@angular/material';
import { UpdateModalComponent } from '../update-modal/update-modal.component';

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
  contactPanelOpenState = false;
  householdPanelOpenState = false;
  pickUpPanelOpenState = false;
  cartDetailsPanelOpenState = false;
  uri = 'http://localhost:4000';
  totals = [];

  constructor(private cartService: CartService, private dialog: MatDialog, private familyService: FamilyService,
              private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
    this.familyService.getFamily().subscribe(family => this.family = family);
    this.cartService.getCart().subscribe(cart => {
        this.cart = cart;
        this.sortCart();
        this.setTotals();
        console.log(this.cart);
    });
  }

  createOrder() {
    const order = new Order();
    order.family = this.family;
    order.cart = this.cart;
    console.log(order);
    return order;
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

  onBackToShopClick() {
    this.router.navigate([`/shop`]);
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

  openUpdateContactModal() {
    this.dialog.open(UpdateModalComponent, {
      width: '34rem',
      disableClose: true,
      data: 'contact'
    });
  }

  openUpdateHouseholdModal() {
    this.dialog.open(UpdateModalComponent, {
      width: '34rem',
      disableClose: true,
      data: 'household'
    });
  }

  openUpdatePickUpModal() {
    this.dialog.open(UpdateModalComponent, {
      width: '34rem',
      disableClose: true,
      data: 'pick-up'
    });
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    $event.returnValue = true;
  }
}
