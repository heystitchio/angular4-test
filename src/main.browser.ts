import 'zone.js/dist/zone'
import 'reflect-metadata'

import * as $ from 'jquery'
import * as Raven from 'raven-js'
import 'swiper'

import { enableProdMode, ErrorHandler } from '@angular/core'
import { platformBrowser }              from '@angular/platform-browser'

import { BrowserAppModuleNgFactory }    from './app/_platform/app.browser.module.ngfactory'

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

enableProdMode();

platformBrowser([{ provide: ErrorHandler, useClass: RavenErrorHandler }])
  .bootstrapModuleFactory(BrowserAppModuleNgFactory);
