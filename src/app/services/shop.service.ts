import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import PROD from 'src/app/uri.config';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  uri = PROD.uri;

  constructor(private httpClient: HttpClient) {}

  getShop() {
    return this.httpClient.get(`${this.uri}/shop`)
    .pipe(
      map(result => result[0].shop)
    );
  }
}
