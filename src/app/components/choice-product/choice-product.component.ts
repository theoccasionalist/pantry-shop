import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { ChoiceProduct } from 'src/app/models/choice-product.model';
import { FamilyService } from 'src/app/services/family.service';
import { Family } from 'src/app/models/family.model';
import { PointService } from 'src/app/services/point.service';

@Component({
  selector: 'app-choice-product',
  templateUrl: './choice-product.component.html',
  styleUrls: ['./choice-product.component.css']
})
export class ChoiceProductComponent implements OnInit {
  choiceProducts: ChoiceProduct[];
  choiceCart: any[];
  family: Family;
  remainingPoints: number;
  @Output() pointEmitter = new EventEmitter<number>();
  panelOpenState =  false;

  constructor(private cartService: CartService, private familyService: FamilyService,
              private pointService: PointService, private productService: ProductService) { }

  ngOnInit() {
    this.family = this.familyService.getFamily();
    this.remainingPoints = this.pointService.getPoints();
    this.choiceProducts = this.productService.getChoiceProducts();
    this.choiceCart = this.cartService.getServiceChoiceItems();
  }

  getChoiceComponentCart() {
    return this.choiceCart;
  }

  getChoiceProductInCart(choiceProduct: ChoiceProduct) {
    return this.choiceCart.find(cartItem => cartItem.name === choiceProduct.name);
  }

  getChoiceProductAmountInCart(choiceProduct: ChoiceProduct) {
    return !this.getChoiceProductInCart(choiceProduct) ? 0 : this.getChoiceProductInCart(choiceProduct).amount;
  }

  isChoiceProductInCart(choiceProduct: ChoiceProduct) {
    return this.getChoiceProductInCart(choiceProduct) ? true : false;
  }

  isChoiceProductAtLimit(choiceProduct: ChoiceProduct) {
    return this.getChoiceProductInCart(choiceProduct) &&
    this.getChoiceProductInCart(choiceProduct).amount === choiceProduct.limit ? true : false;
  }

  isChoiceAddButtonDisabled(choiceProduct: ChoiceProduct) {
    return this.isChoiceProductAtLimit(choiceProduct)
    || this.remainingPoints === 0
    || this.remainingPoints < choiceProduct.points;
  }

  removePoints(choiceProduct: ChoiceProduct) {
    if (this.remainingPoints - choiceProduct.points >= 0) {
      this.remainingPoints = this.remainingPoints - choiceProduct.points;
      this.pointService.updatePoints(this.remainingPoints);
      this.pointEmitter.emit(this.remainingPoints);
    }
  }

  addPoints(choiceProduct: ChoiceProduct) {
    this.remainingPoints = this.remainingPoints + choiceProduct.points;
    this.pointService.updatePoints(this.remainingPoints);
    this.pointEmitter.emit(this.remainingPoints);
  }

  addChoiceProduct(choiceProduct: ChoiceProduct) {
    if (this.remainingPoints >= choiceProduct.points) {
      if (!this.isChoiceProductInCart(choiceProduct)) {
        this.choiceCart.push({name: choiceProduct.name, amount: 1});
      } else if (!this.isChoiceProductAtLimit(choiceProduct)) {
        this.getChoiceProductInCart(choiceProduct).amount++;
      }
      this.removePoints(choiceProduct);
    }
  }

  removeChoiceProduct(choiceProduct: ChoiceProduct) {
    if (this.getChoiceProductInCart(choiceProduct).amount >= 1) {
      this.getChoiceProductInCart(choiceProduct).amount--;
      this.addPoints(choiceProduct);
      if (this.getChoiceProductInCart(choiceProduct).amount === 0) {
        this.choiceCart = this.choiceCart.filter(cartItem => cartItem.name !== choiceProduct.name);
      }
    }
  }
}
