import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  uri = 'http://localhost:4000';

  constructor(private httpClient: HttpClient) {}

  getProductsByTypes() {
    return this.httpClient.get(`${this.uri}/products-by-types`).pipe(
      map(result => result[0].productsByTypes)
    );
  }
}
