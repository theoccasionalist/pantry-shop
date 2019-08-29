import { Component, OnInit, Input } from '@angular/core';
import { Family } from 'src/app/models/family.model';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css']
})
export class ProductTypeComponent implements OnInit {
  @Input() family: Family;
  panelOpenState = false;
  products: Product[] = [];
  onlySchoolProducts: boolean;
  schoolIncluded: boolean;
  @Input() type: string;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.initProducts(products);
    });
    this.schoolIncluded = this.family.schoolChildren > 0;
  }

  initProducts(products: Product[]) {
    products.forEach(product =>
      product.famSizeAmount.forEach(mapping => {
        if (mapping.minFamSize <= this.family.familySize
          && this.family.familySize <= mapping.maxFamSize
          && this.type === product.type) {
            this.products.push(product);
        }
    }));
    this.onlySchoolProducts = this.isOnlySchoolProducts();
  }

  closePanel() {
    this.panelOpenState = false;
  }

  isOnlySchoolProducts() {
    let counter = 0;
    this.products.forEach(product => {
      if (product.school) {
        counter ++;
      }
    });
    return counter === this.products.length;
  }
}
