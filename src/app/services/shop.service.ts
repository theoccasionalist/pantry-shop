import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getShop() {
    return this.httpClient.get(`${this.url}/shop`)
    .pipe(
      map(result => result[0].shop)
    );
  }
}
