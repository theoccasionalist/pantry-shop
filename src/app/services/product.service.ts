import { Injectable } from '@angular/core';
import { Product} from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { mergeMap, filter, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  uri = 'http://localhost:4000';

  constructor(private httpClient: HttpClient) {}

  getProducts() {
    return this.httpClient.get(`${this.uri}/products`);
  }
}
