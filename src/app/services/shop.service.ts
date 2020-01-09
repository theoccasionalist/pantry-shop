import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  uri = 'http://localhost:4000';

  constructor(private httpClient: HttpClient) {}

  getShop() {
    return this.httpClient.get(`${this.uri}/shop`)
    .pipe(
      map(result => result[0].shop)
    );
  }
}
