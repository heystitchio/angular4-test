import './shared/lib/rxjs-operators'

import { NgModule, ErrorHandler, PLATFORM_ID } from '@angular/core'
import { isPlatformBrowser, isPlatformServer } from '@angular/common'
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
import { AuthService, BrowserAuthService }    from './auth/services'
import { BrowserTransferStateModule }          from '../modules/transfer-state'

export function getBrowserLRU(lru?: any) {
  return lru || new Map();
}

export function browserAuthServiceFactory(cookie: CookieService, api: ApiService, http: Http) {
  return new BrowserAuthService(cookie, api, http);
}

const isBrowser: Boolean = isPlatformBrowser(PLATFORM_ID)

const isServer: Boolean = isPlatformServer(PLATFORM_ID)

Raven
  .config('https://e090d88b54a342fba41842bf5a5f9d83@sentry.io/142633', {
    // MD5 hash of working project version (e.g. v.1.0.0)
    // Live productions should be prefixed with "LIVE:" (e.g. LIVE:2888cd...)
    release: '2888cd106bd98b888fca74c785bd6cf5'
  })
  .install();

export class RavenErrorHandler implements ErrorHandler {
  handleError(err: any) : void {
    Raven.captureException(err.originalError || err);
  }
}

@NgModule({
	bootstrap: [ AppComponent ],
	imports: [
    BrowserModule.withServerTransition({ appId: 'root-app' }),
    BrowserTransferStateModule,
    ReactiveFormsModule,
    RouterModule.forRoot([], { useHash: false }),
    ApolloModule.withClient(provideClient),
    SharedModule.forRoot(),
    AppModule
	],
  providers: [
    { provide: 'isBrowser', useValue: isBrowser },
    { provide: 'isServer', useValue: isServer },
    { provide: 'LRU', useFactory: getBrowserLRU, deps: [] },
    { provide: AuthService, useClass: BrowserAuthService },
    { provide: ErrorHandler, useClass: RavenErrorHandler },
    CacheService,
    HashService,
    MetaService,
    CookieService
  ]
})
export class BrowserAppModule {}
