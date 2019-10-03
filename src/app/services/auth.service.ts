import { Injectable } from '@angular/core';
import { from, of, Observable, BehaviorSubject, combineLatest, throwError } from 'rxjs';
import { tap, catchError, concatMap, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import authConfig from '../../../auth.config';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import createAuth0Client from '@auth0/auth0-spa-js';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean = null;
  auth0Client = (from(createAuth0Client(authConfig)) as Observable<Auth0Client>).pipe(
    shareReplay(1),
    catchError(err => throwError(err))
  );
  isAuthenticated = this.auth0Client.pipe(
    concatMap((client: Auth0Client) => from(client.isAuthenticated())),
    tap(res => this.loggedIn = res)
  );
  handleRedirectCallback = this.auth0Client.pipe(
    concatMap((client: Auth0Client) => from(client.handleRedirectCallback()))
  );

  constructor(private router: Router) { }

  localAuthSetup() {
    const checkAuth = this.isAuthenticated.pipe(
      concatMap((loggedIn: boolean) => {
        return of(loggedIn);
      })
    );
    checkAuth.subscribe((response: { [key: string]: any } | boolean) => {
      this.loggedIn = !!response;
    });
  }

  login(redirectPath: string = `/family`) {
    this.auth0Client.subscribe((client: Auth0Client) => {
      client.loginWithRedirect({
        redirect_uri: `${window.location.origin}/callback`,
        appState: { target: redirectPath }
      });
    });
  }

  handleAuthCallback() {
    let targetRoute: string;
    const authComplete = this.handleRedirectCallback.pipe(
      tap(cbRes => {
        targetRoute = cbRes.appState && cbRes.appState.target ? cbRes.appState.target : '/';
      }),
      concatMap(() => {
        return combineLatest(
          this.isAuthenticated
        );
      })
    );
    authComplete.subscribe(([loggedIn]) => {
      this.router.navigate([targetRoute]);
    });
  }

  logout() {
    this.auth0Client.subscribe((client: Auth0Client) => {
      client.logout({
        client_id: authConfig.client_id,
        returnTo: `${window.location.origin}`
      });
    });
  }
}
