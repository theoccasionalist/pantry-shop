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

  getAfterSchoolProducts() {
    return this.httpClient.get(`${this.uri}/after-school-products`).pipe(
      tap(result => this.sortByName(result)));
  }

  getBulkProducts() {
    const bulkProducts: Product[] = [];
    this.httpClient.get(`${this.uri}/bulk-products`).pipe(
      tap(result => this.sortByName(result))
    ).subscribe(
      (response: any[]) => {
        response.forEach(element =>
          bulkProducts.push({name: element.name})
        );
      }
    );
    return bulkProducts;
  }

  getChoiceProducts() {
    return this.httpClient.get(`${this.uri}/choice-products`).pipe(
      tap(result => this.sortByName(result)));
  }

  getDairyProducts(): Observable<any> {
    return this.httpClient.get(`${this.uri}/dairy-products`).pipe(
      tap(result => this.sortByName(result)));
  }

  getMeatAmounts(): Observable<any> {
    return this.httpClient.get(`${this.uri}/meat-limits`);
  }

  getMeatProducts(): Observable<any> {
    return this.httpClient.get(`${this.uri}/meat-products`).pipe(
      tap(result => this.sortByName(result)));
  }

  getRecipes(): Observable<any> {
    return this.httpClient.get(`${this.uri}/recipes`);
  }

  private sortByName(productArray) {
    return productArray.sort(
      (first, second) =>
      first.name.toLowerCase() < second.name.toLowerCase() ? -1 : 1
    );
  }
}
