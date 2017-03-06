import '../shared/lib/rxjs-operators'

import { NgModule, PLATFORM_ID }               from '@angular/core'
import { isPlatformBrowser, isPlatformServer } from '@angular/common'
import { HttpModule }                          from '@angular/http'
import { ReactiveFormsModule }                 from '@angular/forms'
import { RouterModule }                        from '@angular/router'

import { AppModule }                           from '../'
import { SharedModule }                        from '../shared/shared.module'

const isBrowser: Boolean = isPlatformBrowser(PLATFORM_ID)

const isServer: Boolean = isPlatformServer(PLATFORM_ID)


@NgModule({
	imports: [
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([], { useHash: false }),
    SharedModule.forRoot(),
    AppModule
	],
  providers: [
    { provide: 'isBrowser', useValue: isBrowser },
    { provide: 'isServer', useValue: isServer }
  ]
})
export class CommonAppModule {}
