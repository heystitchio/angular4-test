import '../shared/lib/rxjs-operators'

import { NgModule  }                                from '@angular/core'
import { ServerModule }                             from '@angular/platform-server'

import { ApolloModule }                             from 'apollo-angular'
import { provideServerClient }                      from './'

import { TransferState, ServerTransferStateModule } from '../../modules/transfer-state'
import { CommonAppModule }                          from './'
import { AppComponent }                             from '../'
import { AuthService, ServerAuthService }           from '../auth/services'

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


@NgModule({
  bootstrap: [AppComponent],
  imports: [
    ServerModule,
    ServerTransferStateModule,
    ApolloModule.withClient(provideServerClient),
    CommonAppModule,
  ],
  providers: [
    { provide: 'req', useFactory: getRequest },
    { provide: 'res', useFactory: getResponse },
    { provide: 'LRU', useFactory: getServerLRU, deps: [] },
    { provide: AuthService, useClass: ServerAuthService },
  ]
})
export class ServerAppModule {

  constructor(
    private _transferState: TransferState
  ) { }

  ngOnBootstrap = () => {
    this._transferState.inject();
  }

}
