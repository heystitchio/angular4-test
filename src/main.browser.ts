import 'zone.js/dist/zone'
import 'reflect-metadata'

import * as $ from 'jquery'
import 'swiper'

import { enableProdMode, ErrorHandler } from '@angular/core'
import { platformBrowser }              from '@angular/platform-browser'

import { BrowserAppModuleNgFactory }    from './app/_platform/app.browser.module.ngfactory'

declare var preboot: any;

enableProdMode();

platformBrowser()
  .bootstrapModuleFactory(BrowserAppModuleNgFactory)
  .then(() => {
    preboot.complete();
  });
