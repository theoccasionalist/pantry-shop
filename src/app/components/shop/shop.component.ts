import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { BulkProductComponent } from '../bulk-product/bulk-product.component';
import { AfterSchoolProductComponent } from '../after-school-product/after-school-product.component';
import { ChoiceProductComponent } from '../choice-product/choice-product.component';
import { MeatProductComponent } from '../meat-product/meat-product.component';
import { CartCategoryItems } from '../../models/cart-category-items.model';
import { CartService } from '../../services/cart.service';
import { Family } from '../../models/family.model';
import { FamilyService} from '../../services/family.service';
import { PointService } from '../../services/point.service';
import { DairyProductComponent } from '../dairy-product/dairy-product.component';
import { RecipeComponent } from '../recipe/recipe.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  @ViewChild(AfterSchoolProductComponent, {static: false})
  afterSchoolProductComponent: AfterSchoolProductComponent;
  @ViewChild(BulkProductComponent, {static: false})
  bulkProductComponent: BulkProductComponent;
  @ViewChild(ChoiceProductComponent, {static: false})
  choiceProductComponent: ChoiceProductComponent;
  @ViewChild(DairyProductComponent, {static: false})
  dairyProductComponent: DairyProductComponent;
  @ViewChild(MeatProductComponent, {static: false})
  meatProductComponent: MeatProductComponent;
  @ViewChild(RecipeComponent, {static: false})
  recipeComponent: RecipeComponent;

  cart: CartCategoryItems[] = [];
  family: Family;
  remainingPoints: number;
  maxPoints: number;

  constructor(private cartService: CartService, private familyService: FamilyService,
              private pointService: PointService, private router: Router) { }

  ngOnInit() {
    this.familyService.getFamily().subscribe(currentFamily => this.family = currentFamily);
    this.remainingPoints = this.pointService.getPoints();
    this.maxPoints = this.pointService.getMaxPoints();
  }

  receivePoints($event) {
    this.remainingPoints = $event;
  }

  updateShopComponentCart() {
    const bulk = this.bulkProductComponent.getBulkComponentCart();
    const dairy = this.dairyProductComponent.getDairyComponentCart();
    const choice = this.choiceProductComponent.getChoiceComponentCart();
    const meat = this.meatProductComponent.getMeatComponentCart();
    const recipe = this.recipeComponent.getRecipeComponentCart();
    if (this.afterSchoolProductComponent) {
      const afterSchool = this.afterSchoolProductComponent.getAfterSchoolComponentCart();
      if (this.isComponentCartPopulated(afterSchool)) {
        this.cart.push({
          category: 'after school products',
          items: this.afterSchoolProductComponent.getAfterSchoolComponentCart()
        });
      }
    }
    if (this.isComponentCartPopulated(bulk)) {
      this.cart.push({
        category: 'bulk products',
        items: this.bulkProductComponent.getBulkComponentCart()
      });
    }
    if (this.isComponentCartPopulated(choice)) {
      this.cart.push({
        category: 'choice products',
        items: this.choiceProductComponent.getChoiceComponentCart()
      });
    }
    if (this.isComponentCartPopulated(dairy)) {
      this.cart.push({
        category: 'dairy products',
        items: this.dairyProductComponent.getDairyComponentCart()
      });
    }
    if (this.isComponentCartPopulated(meat) && this.meatProductComponent.includeMeat) {
      this.cart.push({
        category: 'meat products',
        amount: this.meatProductComponent.meatAmount,
        items: this.meatProductComponent.getMeatComponentCart()
      });
    }
    if (this.isComponentCartPopulated(recipe)) {
      this.cart.push({
        category: 'recipe',
        items: this.recipeComponent.getRecipeComponentCart()
      });
    }
  }

  onBackToFamilyClick() {
    this.router.navigate([`/family`]);
  }

  onReviewCartClick() {
    this.updateShopComponentCart();
    this.cartService.updateServiceCart(this.cart);
    this.router.navigate([`/cart`]);
    console.log(this.cart);
  }

  private isComponentCartPopulated(componentCart: any[]) {
    return componentCart.length !== 0;
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    $event.returnValue = true;
  }
}
