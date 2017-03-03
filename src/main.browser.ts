import 'zone.js/dist/zone'
import 'reflect-metadata'

import * as $ from 'jquery'
import * as Raven from 'raven-js'
import 'swiper'

import { enableProdMode }            from '@angular/core'
import { platformBrowser }           from '@angular/platform-browser'
import { BrowserAppModuleNgFactory } from './app/app.browser.module.ngfactory'

enableProdMode();

platformBrowser()
  .bootstrapModuleFactory(BrowserAppModuleNgFactory);
