import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import createAuth0Client from '@auth0/auth0-spa-js';
import authConfig from '../../../auth.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = new BehaviorSubject(false);
  profile = new BehaviorSubject<any>(null);
  private auth0Client: Auth0Client;
  config = authConfig;

  constructor() { }

  async getAuth0Client(): Promise<Auth0Client> {
    if (!this.auth0Client) {
      this.auth0Client = await createAuth0Client(this.config);
      this.isAuthenticated.next(await this.auth0Client.isAuthenticated());
      this.isAuthenticated.subscribe(async isAuthenticated => {
        if (isAuthenticated) {
          this.profile.next(await this.auth0Client.getUser());

          return;
        }
        this.profile.next(null);
      });
    }
    return this.auth0Client;
  }
}
