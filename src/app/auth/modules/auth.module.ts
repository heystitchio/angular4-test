import { NgModule }                              from '@angular/core'
import { ReactiveFormsModule }                   from '@angular/forms'

import { SharedModule }                          from '../../shared/shared.module'
import { LoginComponent,
         SignupComponent }                       from './../components'
import { AuthModelService }                      from '../models'
import { BrowserAuthService, ServerAuthService } from '../services'
import { AuthRoutingModule }                     from './'

@NgModule({
  imports: [
    ReactiveFormsModule,
    SharedModule,
    AuthRoutingModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  providers: [
    AuthModelService,
    BrowserAuthService,
    ServerAuthService
  ]
})
export class AuthModule { }
