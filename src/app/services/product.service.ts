import { Injectable } from '@angular/core';
import { AfterSchoolProduct } from '../models/after-school-product.model';
import { Product} from '../models/product.model';
import { ChoiceProduct } from '../models/choice-product.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  uri = 'http://localhost:4000';

  constructor(private httpClient: HttpClient) {}

  private sortByName(productArray) {
    return productArray.sort(
      (first, second) =>
      first.name.toLowerCase() < second.name.toLowerCase() ? -1 : 1
    );
  }

  getAfterSchoolProducts() {
    const afterSchoolProducts: AfterSchoolProduct[] = [];
    this.httpClient.get(`${this.uri}/after-school-products`).pipe(
      tap(result => this.sortByName(result))
    ).subscribe(
      (response: any[]) => {
        response.forEach(element =>
          afterSchoolProducts.push({
            name: element.name,
            sizeLimit: element.sizeLimit
          })
        );
      }
    );
    return afterSchoolProducts;
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
    const choiceProducts: ChoiceProduct[] = [];
    this.httpClient.get(`${this.uri}/choice-products`).pipe(
      tap(result => this.sortByName(result))
    ).subscribe(
      (response: any[]) => {
        response.forEach(element =>
          choiceProducts.push({name: element.name, limit: element.limit, points: element.points})
        );
      }
    );
    return choiceProducts;
  }

  getDairyProducts() {
    const dairyProducts: Product[] = [];
    this.httpClient.get(`${this.uri}/dairy-products`).pipe(
      tap(result => this.sortByName(result))
    ).subscribe(
      (response: any[]) => {
        response.forEach(element =>
          dairyProducts.push({name: element.name})
        );
      }
    );
    return dairyProducts;
  }

  getMeatProducts() {
    const meatProducts: Product[] = [];
    this.httpClient.get(`${this.uri}/meat-products`).pipe(
      tap(result => this.sortByName(result))
    ).subscribe(
      (response: any[]) => {
        response.forEach(element =>
          meatProducts.push({name: element.name})
        );
      }
    );
    return meatProducts;
  }
}
