import './shared/lib/rxjs-operators'

import { NgModule, ErrorHandler, OpaqueToken } from '@angular/core'
import { ReactiveFormsModule }                 from '@angular/forms'
import { RouterModule }                        from '@angular/router'
import { Http }                                from '@angular/http'
import { BrowserModule }                       from '@angular/platform-browser'

import { ApolloClient }                        from 'apollo-client'
import { ApolloModule }                        from 'apollo-angular'
import { provideClient }                       from './apollo.browser'
import { CookieService }                       from 'angular2-cookie/services/cookies.service'
import * as Raven                              from 'raven-js'

import { AppModule, AppComponent }             from './'
import { SharedModule }                        from './shared/shared.module'
import { CacheService, HashService }           from './shared/services/cache'
import { ApiService }                          from './shared/services/api'
import { MetaService }                         from './shared/services/meta'
import { AUTH_SERVICE, BrowserAuthService }    from './auth/services'
import { BrowserTransferStateModule }          from '../modules/transfer-state'

export function getBrowserLRU(lru?: any) {
  return lru || new Map();
}

export function browserAuthServiceFactory(cookie: CookieService, api: ApiService, http: Http) {
  return new BrowserAuthService(cookie, api, http);
}

Raven
  .config('https://e090d88b54a342fba41842bf5a5f9d83@sentry.io/142633')
  .install();

export class RavenErrorHandler implements ErrorHandler {
  handleError(err: any) : void {
    Raven.captureException(err.originalError || err);
  }
}

@NgModule({
	bootstrap: [ AppComponent ],
	imports: [
    BrowserModule.withServerTransition({
      appId: 'root-app'
    }),
    BrowserTransferStateModule,ReactiveFormsModule,
    RouterModule.forRoot([], { useHash: false }),
    ApolloModule.withClient(provideClient),
    SharedModule.forRoot(),
    AppModule
	],
  providers: [
    { provide: 'isBrowser', useValue: true },
    { provide: 'isServer', useValue: false },
    { provide: 'LRU', useFactory: getBrowserLRU, deps: [] },
    { provide: AUTH_SERVICE, useFactory: browserAuthServiceFactory, deps: [CookieService, ApiService, Http] },
    { provide: ErrorHandler, useClass: RavenErrorHandler },
    CacheService,
    HashService,
    MetaService,
    CookieService
  ]
})
export class BrowserAppModule {}
