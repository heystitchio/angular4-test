import '../shared/lib/rxjs-operators'

import { NgModule }            from '@angular/core'
import { HttpModule }          from '@angular/http'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule }        from '@angular/router'

import { AppModule }           from '../'
import { SharedModule }        from '../shared/shared.module'


@NgModule({
	imports: [
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([], { useHash: false }),
    SharedModule.forRoot(),
    AppModule
	]
})
export class CommonAppModule {}
