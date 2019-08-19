import { Injectable } from '@angular/core';
import { AfterSchoolProduct } from '../models/after-school-product.model';
import { Product} from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { tap, mergeMap, filter, toArray } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  uri = 'http://localhost:4000';

  constructor(private httpClient: HttpClient) {}

  getProducts() {
    return this.httpClient.get(`${this.uri}/products`);
  }

  getProductsByType(type: string) {
    return this.httpClient.get(`${this.uri}/products`).pipe(
      mergeMap((products: Product[]) => products),
      filter((product: Product) => product.type === type),
      toArray()
    );
  }

  private sortByName(productArray) {
    return productArray.sort(
      (first, second) =>
      first.name.toLowerCase() < second.name.toLowerCase() ? -1 : 1
    );
  }
}
