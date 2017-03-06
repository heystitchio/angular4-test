import { NgModule, ModuleWithProviders }    from '@angular/core'
import { CommonModule }                     from '@angular/common'
import { RouterModule }                     from '@angular/router'
import { ReactiveFormsModule }              from '@angular/forms'

import { SharedComponentsModule }           from './components/components.module'
import { ApiService }                       from './services/api'
import { CacheService, HashService }        from './services/cache'
import { MetaService }                      from './services/meta'


const MODULES = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  SharedComponentsModule
];

const PIPES = [
  // put pipes here
];

const COMPONENTS = [
  // put shared components here
];

const PROVIDERS = [
  CacheService,
  HashService,
  MetaService,
  ApiService
]

@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [
    ...PIPES,
    ...COMPONENTS
  ],
  exports: [
    ...MODULES,
    ...PIPES,
    ...COMPONENTS
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ...PROVIDERS
      ]
    };
  }
}
