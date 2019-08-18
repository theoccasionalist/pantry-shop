import { Injectable } from '@angular/core';
import { AfterSchoolProduct } from '../models/after-school-product.model';
import { Product} from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
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

  private sortByName(productArray) {
    return productArray.sort(
      (first, second) =>
      first.name.toLowerCase() < second.name.toLowerCase() ? -1 : 1
    );
  }
}
