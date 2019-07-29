import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipes: Product[] = [];
  recipeCart: any[];
  panelOpenState = false;

  constructor(private cartService: CartService, private productService: ProductService) { }

  ngOnInit() {
    this.productService.getRecipes().subscribe((response: any[]) => {
      response.forEach(element => this.recipes.push({
        name: element.name,
      }));
    });
    this.recipeCart = this.cartService.getServiceRecipeItems();
  }

  getRecipeComponentCart() {
    return this.recipeCart;
  }

  isProductInCart(recipe: Product) {
    return this.recipeCart.some(cartItem => cartItem.name === recipe.name);
  }

  updateRecipeCart(recipe: Product) {
    this.isProductInCart(recipe) ?
      this.recipeCart = this.recipeCart.filter((cartItem) => cartItem.name !== recipe.name) :
      this.recipeCart.push({name: recipe.name});
  }

}
