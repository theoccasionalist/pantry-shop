// import { Component, ChangeDetectorRef, Input, OnInit } from '@angular/core';
// import { Family } from 'src/app/models/family.model';
// import { Product } from 'src/app/models/product.model';
// import { ProductService } from 'src/app/services/product.service';
// import { CartService } from 'src/app/services/cart.service';

// @Component({
//   selector: 'app-meat-product',
//   templateUrl: './meat-product.component.html',
//   styleUrls: ['./meat-product.component.css']
// })
// export class MeatProductComponent implements OnInit {
//   @Input() family: Family;
//   includeMeat: boolean;
//   meatCart: any[];
//   meatAmount: number;
//   meatProducts: Product[] = [];
//   panelOpenState = false;
//   preference: string;
//   preferenceOptions: string[] = ['Preferred', 'Neutral', 'Exclude'];

//   constructor(private cartService: CartService, private viewChange: ChangeDetectorRef, private productService: ProductService) { }

//   ngOnInit() {
//     this.cartService.getCart().subscribe(cart =>
//       cart.categoryItems.some(el => el.category === 'meat') ?
//        this.meatCart = cart.categoryItems.filter(el => el.category === 'meat')[0].items :
//        this.meatCart = []
//     );
//     this.productService.getMeatProducts().subscribe((response: any[]) => {
//       response.forEach(el => this.meatProducts.push({name: el.name}));
//     });
//     this.productService.getMeatAmounts().subscribe((response: any[]) => {
//       response.forEach(el => {
//         if (el.size.includes(this.family.familySize)) {
//           this.meatAmount = el.amount;
//       }});
//     });
//     this.setIncludeMeatFlag();
//   }

//   private setIncludeMeatFlag() {
//     this.meatCart.length ? this.includeMeat = true : this.includeMeat = false;
//   }

//   closePanel() {
//     this.panelOpenState = false;
//   }

//   getMeatComponentCart() {
//     return this.meatCart;
//   }

//   isPreferenceChecked(meatProduct: Product, preferenceOption: string) {
//     return this.meatCart.some(cartItem => cartItem.name === meatProduct.name
//       && cartItem.preference === preferenceOption);
//   }

//   updateIncludeMeatFlag() {
//     this.includeMeat = !this.includeMeat;
//     if (!this.meatCart.length) {
//       this.initMeatCart();
//     }
//   }

//   private initMeatCart() {
//     this.meatProducts.forEach(cartItem =>
//         this.meatCart.push({
//           name: cartItem.name,
//           preference: this.preferenceOptions[1]
//     }));
//   }

//   updateMeatCart(meatProduct: Product, selectedPreference: string) {
//     const inCart = this.meatCart.some(cartItem => cartItem.name === meatProduct.name);
//     if (!inCart) {
//       this.meatCart.push({
//         name: meatProduct.name,
//         preference: selectedPreference
//       });
//     } else {
//       const index = this.meatCart.findIndex(meatItem => meatProduct.name === meatItem.name);
//       this.meatCart[index].preference = selectedPreference;
//     }
//     if (this.meatCart.length === this.meatProducts.length) {
//       this.excludeAllCheck();
//     }
//   }

//   private excludeAllCheck() {
//     const hasItems = this.meatCart.filter(cartItem => cartItem.preference !== this.preferenceOptions[2]);
//     if (!hasItems.length) {
//       this.meatCart = [];
//       this.viewChange.markForCheck();
//       this.includeMeat = false;
//     }
//   }
// }
