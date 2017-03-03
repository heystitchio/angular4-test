import './shared/lib/rxjs-operators'

import { NgModule, ErrorHandler, OpaqueToken } from '@angular/core'
import { ReactiveFormsModule }                 from '@angular/forms'
import { RouterModule }                        from '@angular/router'
import { Http }                                from '@angular/http'
import { ServerModule }                        from '@angular/platform-server'

import { ApolloClient }                        from 'apollo-client'
import { ApolloModule }                        from 'apollo-angular'
import { provideClient }                       from './apollo.server'

import { AppModule, AppComponent }             from './'
import { SharedModule }                        from './shared/shared.module'
import { CacheService, HashService }           from './shared/services/cache'
import { ApiService }                          from './shared/services/api'
import { MetaService }                         from './shared/services/meta'
import { AUTH_SERVICE, ServerAuthService }     from './auth/services'
import { ServerTransferStateModule }           from '../modules/transfer-state'

declare var Zone: any

export function getServerLRU(): any {
  return new Map();
}

export function getRequest(): any {
  return Zone.current.get('req') || {};
}

export function getResponse(): any {
  return Zone.current.get('res') || {};
}

export function serverAuthServiceFactory(api: ApiService, http: Http, req: any) {
  return new ServerAuthService(api, http, req);
}

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    ServerModule,
    ServerTransferStateModule,
    RouterModule.forRoot([], { useHash: false }),
    ApolloModule.withClient(provideClient),
    SharedModule.forRoot(),
	  AppModule
  ],
  providers: [
    { provide: 'isBrowser', useValue: false },
    { provide: 'isServer', useValue: true },
    { provide: 'req', useFactory: getRequest },
    { provide: 'res', useFactory: getResponse },
    { provide: 'LRU', useFactory: getServerLRU, deps: [] },
    { provide: AUTH_SERVICE, useFactory: serverAuthServiceFactory, deps: [ApiService, Http, 'req'] },
    CacheService,
    HashService,
    MetaService
  ]
})
export class ServerAppModule {}
