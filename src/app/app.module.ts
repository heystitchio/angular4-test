import { NgModule }                    from '@angular/core';
import { BrowserModule }               from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { ReactiveFormsModule }         from '@angular/forms';
import { HttpModule }                  from '@angular/http';
import { RouterModule }                from '@angular/router';

import { StoreModule }                 from '@ngrx/store';

import { AuthModule, authReducer }      from './auth';
import { CreateModule }                 from './create/create.module';
import { DiscoverModule }               from './discover/discover.module';
import { AboutModule }                  from './+about';
import { ContactModule }                from './+contact';
import { ExploreModule }                from './+explore/explore.module';
import { HelpModule }                   from './+help/help.module';
import { HighlightsModule }             from './+highlights/highlights.module';
import { JobsModule }                   from './+jobs/jobs.module';
import { ProjectModule }                from './+project/project.module';
import { SearchModule }                 from './+search/search.module';
import { SettingsModule }               from './+settings/settings.module';
import { TeamModule }                   from './+team/team.module';
import { TermsModule }                  from './+terms/terms.module';
import { TrendingModule }               from './+trending/trending.module';
import { UserModule }                   from './+user/user.module';
import { NotFoundRoutingModule, NotFoundComponent } from './404';

import { SharedModule }                 from './shared';

import { AppRoutingModule, AppComponent } from './';


@NgModule({
  declarations: [ 
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    SharedModule,
    AboutModule,
    AuthModule,
    ContactModule,
    CreateModule,
    DiscoverModule,
    ExploreModule,
    HelpModule,
    HighlightsModule,
    JobsModule,
    ProjectModule,
    SearchModule,
    SettingsModule,
    TeamModule,
    TermsModule,
    TrendingModule,
    UserModule,
    AppRoutingModule,
    NotFoundRoutingModule,
    StoreModule.provideStore({
      auth: authReducer
    })
  ],
	providers: [
    { provide: APP_BASE_HREF, useValue: '/'}
  ],
})
export class AppModule {
}

export { AppComponent } from './app.component';
