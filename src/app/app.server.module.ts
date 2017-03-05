import './shared/lib/rxjs-operators'

import { NgModule, ErrorHandler, PLATFORM_ID } from '@angular/core'
import { isPlatformBrowser, isPlatformServer } from '@angular/common'
import { ReactiveFormsModule }                 from '@angular/forms'
import { RouterModule }                        from '@angular/router'
import { ServerModule }                        from '@angular/platform-server'

import { ApolloClient }                        from 'apollo-client'
import { ApolloModule }                        from 'apollo-angular'
import { provideClient }                       from './apollo.server'

import { AppModule, AppComponent }             from './'
import { SharedModule }                        from './shared/shared.module'
import { CacheService, HashService }           from './shared/services/cache'
import { ApiService }                          from './shared/services/api'
import { MetaService }                         from './shared/services/meta'
import { AuthService, ServerAuthService }     from './auth/services'
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

const isBrowser: Boolean = isPlatformBrowser(PLATFORM_ID)

const isServer: Boolean = isPlatformServer(PLATFORM_ID)


@NgModule({
  bootstrap: [AppComponent],
  imports: [
    ServerModule,
    ServerTransferStateModule,
    ReactiveFormsModule,
    RouterModule.forRoot([], { useHash: false }),
    ApolloModule.withClient(provideClient),
    SharedModule.forRoot(),
	  AppModule
  ],
  providers: [
    { provide: 'isBrowser', useValue: isBrowser },
    { provide: 'isServer', useValue: isServer },
    { provide: 'req', useFactory: getRequest },
    { provide: 'res', useFactory: getResponse },
    { provide: 'LRU', useFactory: getServerLRU, deps: [] },
    { provide: AuthService, useClass: ServerAuthService },
    CacheService,
    HashService,
    MetaService
  ]
})
export class ServerAppModule {}
