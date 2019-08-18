// import { Component, OnInit, Input, HostListener } from '@angular/core';
// import { Cart } from '../../models/cart.model';
// import { CartService } from '../../services/cart.service';
// import { Family } from '../../models/family.model';
// import { FamilyService } from '../../services/family.service';
// import { Router } from '@angular/router';
// import { Order } from 'src/app/models/order.model';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent implements OnInit {
//   family: Family;
//   cart: Cart;
//   @Input() pickUpDate;
//   panelOpenState = false;
//   columns: string[] = ['column1', 'column2'];
//   uri = 'http://localhost:4000';
//   viewItems = {};
//   totals = {};

//   constructor(private cartService: CartService, private familyService: FamilyService,
//               private httpClient: HttpClient,  private router: Router) { }

//   ngOnInit() {
//     this.familyService.getFamily().subscribe(currentFamily => this.family = currentFamily);
//     this.cartService.getCart().subscribe(currentCart => this.cart = currentCart);
//     this.setViewItems(this.cart);
//     this.setTotals(this.cart);
//     console.log(this.cart);
//   }

//   setViewItems(cart: Cart) {
//     const categories = ['afterSchool', 'bulk', 'choice', 'dairy', 'meat', 'recipe'];
//     cart.categoryItems.forEach(subCart => {
//       categories.forEach(category => {
//         if (subCart.category === category) {
//           Object.assign(this.viewItems, {[category] : subCart.items});
//       }});
//     });
//   }

//   setTotals(cart: Cart) {
//     cart.categoryItems.forEach(subCart => {
//       if (subCart.category === 'bulk'
//         || subCart.category === 'dairy'
//         || subCart.category === 'recipe') {
//         Object.assign(this.totals, {[subCart.category] : subCart.items.length});
//       } else if (subCart.category === 'meat') {
//         Object.assign(this.totals, {[subCart.category] : subCart.amount});
//       } else {
//         Object.assign(this.totals, {
//           [subCart.category] : subCart.items.map(item => item.amount)
//           .reduce((acc, value) => acc + value)
//         });
//     }});
//   }

//   onBackToCart() {
//     this.router.navigate([`/shop`]);
//   }

//   createOrder() {
//       const order = new Order();
//       order.family = this.family;
//       order.cart = this.cart.categoryItems;
//       order.pickUpDate = 'whenever';
//       console.log(order);
//       return order;
//   }

//   onSubmitOrder() {
//     console.log(this.httpClient.post(`${this.uri}/orders`, this.createOrder()));
//     this.httpClient.post(`${this.uri}/orders`, this.createOrder()).subscribe(() =>
//       this.router.navigate([`/`])
//     );
//     this.cartService.resetCart();
//   }

//   @HostListener('window:beforeunload', ['$event'])
//   unloadNotification($event: any) {
//     $event.returnValue = true;
//   }
// }
