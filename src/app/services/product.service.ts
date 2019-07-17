import { Injectable } from '@angular/core';
import { Product} from '../models/product.model';
import { ChoiceProduct } from '../models/choice-product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  uri = 'http://localhost:4000';

  constructor(private httpClient: HttpClient) {}

  getAfterSchoolProducts() {
    const afterSchoolProducts: Product[] = [];
    this.httpClient.get(`${this.uri}/after-school-products`).subscribe(
      (response: any[]) => {
        response.map(element =>
          afterSchoolProducts.push({name: element.name})
        );
      }
    );
    return afterSchoolProducts;
  }

  getBulkProducts() {
    const bulkProducts: Product[] = [];
    this.httpClient.get(`${this.uri}/bulk-products`).subscribe(
      (response: any[]) => {
        response.map(element =>
          bulkProducts.push({name: element.name})
        );
      }
    );
    return bulkProducts;
  }

  getChoiceProducts() {
    const choiceProducts: ChoiceProduct[] = [];
    this.httpClient.get(`${this.uri}/choice-products`).subscribe(
      (response: any[]) => {
        response.map(element =>
          choiceProducts.push({name: element.name, limit: element.limit, points: element.points})
        );
      }
    );
    return choiceProducts;
  }

  getDairyProducts() {
    const dairyProducts: Product[] = [];
    this.httpClient.get(`${this.uri}/dairy-products`).subscribe(
      (response: any[]) => {
        response.map(element =>
          dairyProducts.push({name: element.name})
        );
      }
    );
    return dairyProducts;
  }

  getMeatProducts() {
    const meatProducts: Product[] = [];
    this.httpClient.get(`${this.uri}/meat-products`).subscribe(
      (response: any[]) => {
        response.map(element =>
          meatProducts.push({name: element.name})
        );
      }
    );
    return meatProducts;
  }
}
