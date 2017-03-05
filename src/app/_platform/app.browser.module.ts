import '../shared/lib/rxjs-operators'

import { NgModule, ErrorHandler, PLATFORM_ID } from '@angular/core'
import { isPlatformBrowser, isPlatformServer } from '@angular/common'
import { ReactiveFormsModule }                 from '@angular/forms'
import { RouterModule }                        from '@angular/router'
import { Http }                                from '@angular/http'
import { BrowserModule }                       from '@angular/platform-browser'

import { ApolloModule }                        from 'apollo-angular'
import { provideBrowserClient }                from './'
import { CookieService }                       from 'angular2-cookie/services/cookies.service'

import { AppModule, AppComponent }             from '../'
import { SharedModule }                        from '../shared/shared.module'
import { CacheService, HashService }           from '../shared/services/cache'
import { ApiService }                          from '../shared/services/api'
import { MetaService }                         from '../shared/services/meta'
import { AuthService, BrowserAuthService }     from '../auth/services'

export function getBrowserLRU(lru?: any) {
  return lru || new Map();
}

export function browserAuthServiceFactory(cookie: CookieService, api: ApiService, http: Http) {
  return new BrowserAuthService(cookie, api, http);
}

const isBrowser: Boolean = isPlatformBrowser(PLATFORM_ID)

const isServer: Boolean = isPlatformServer(PLATFORM_ID)


@NgModule({
	bootstrap: [ AppComponent ],
	imports: [
    BrowserModule.withServerTransition({ appId: 'root-app' }),
    ReactiveFormsModule,
    RouterModule.forRoot([], { useHash: false }),
    ApolloModule.withClient(provideBrowserClient),
    SharedModule.forRoot(),
    AppModule
	],
  providers: [
    { provide: 'isBrowser', useValue: isBrowser },
    { provide: 'isServer', useValue: isServer },
    { provide: 'LRU', useFactory: getBrowserLRU, deps: [] },
    { provide: AuthService, useClass: BrowserAuthService },
    CacheService,
    HashService,
    MetaService,
    CookieService
  ]
})
export class BrowserAppModule {}
