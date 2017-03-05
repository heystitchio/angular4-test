/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core';
import * as import1 from './app.module';
import * as import2 from '@angular/common';
import * as import3 from '@angular/router';
import * as import4 from '@angular/forms';
import * as import5 from './shared/components/components.module';
import * as import6 from './shared/shared.module';
import * as import7 from './+about/about-routing.module';
import * as import8 from './+about/about.module';
import * as import9 from './auth/modules/auth-routing.module';
import * as import10 from './auth/modules/auth.module';
import * as import11 from './+contact/contact-routing.module';
import * as import12 from './+contact/contact.module';
import * as import13 from './create/create-routing.module';
import * as import14 from './create/create.module';
import * as import15 from './discover/discover-routing.module';
import * as import16 from './discover/discover.module';
import * as import17 from './+explore/explore-routing.module';
import * as import18 from './+explore/explore.module';
import * as import19 from './+help/help-routing.module';
import * as import20 from './+help/help.module';
import * as import21 from './+highlights/highlights-routing.module';
import * as import22 from './+highlights/highlights.module';
import * as import23 from './+jobs/jobs-routing.module';
import * as import24 from './+jobs/jobs.module';
import * as import25 from './+project/project-routing.module';
import * as import26 from './+project/project.module';
import * as import27 from './+search/search-routing.module';
import * as import28 from './+search/search.module';
import * as import29 from './+settings/settings-routing.module';
import * as import30 from './+settings/settings.module';
import * as import31 from './+team/team-routing.module';
import * as import32 from './+team/team.module';
import * as import33 from './+terms/terms-routing.module';
import * as import34 from './+terms/terms.module';
import * as import35 from './+trending/trending-routing.module';
import * as import36 from './+trending/trending.module';
import * as import37 from './+user/user-routing.module';
import * as import38 from './+user/user.module';
import * as import39 from './app-routing.module';
import * as import40 from './+404/404-routing.module';
import * as import41 from '@ngrx/store/src/ng2';
import * as import42 from '@ngrx/store/src/dispatcher';
import * as import43 from './auth/models/auth.model.service';
import * as import44 from './+about/about.component.ngfactory';
import * as import45 from './+about/how-it-works/how-it-works.component.ngfactory';
import * as import46 from './+about/welcome/welcome.component.ngfactory';
import * as import47 from './+about/who-we-are/who-we-are.component.ngfactory';
import * as import48 from './+about/press/press.component.ngfactory';
import * as import49 from './auth/components/login/login.component.ngfactory';
import * as import50 from './auth/components/signup/signup.component.ngfactory';
import * as import51 from './+contact/contact.component.ngfactory';
import * as import52 from './+contact/newsletters/newsletters.component.ngfactory';
import * as import53 from './create/create.component.ngfactory';
import * as import54 from './discover/discover.component.ngfactory';
import * as import55 from './+explore/explore.component.ngfactory';
import * as import56 from './+explore/featured/featured.component.ngfactory';
import * as import57 from './+explore/popular/popular.component.ngfactory';
import * as import58 from './+explore/categories/categories.component.ngfactory';
import * as import59 from './+help/help.component.ngfactory';
import * as import60 from './+help/faq/faq.component.ngfactory';
import * as import61 from './+help/support/support.component.ngfactory';
import * as import62 from './+highlights/highlights.component.ngfactory';
import * as import63 from './+jobs/jobs.component.ngfactory';
import * as import64 from './+project/single/single-project.component.ngfactory';
import * as import65 from './+project/single/dashboard/project-dashboard.component.ngfactory';
import * as import66 from './+search/search.component.ngfactory';
import * as import67 from './+settings/settings.component.ngfactory';
import * as import68 from './+team/single/single-team.component.ngfactory';
import * as import69 from './+team/single/dashboard/team-dashboard.component.ngfactory';
import * as import70 from './+terms/terms.component.ngfactory';
import * as import71 from './+terms/use/use.component.ngfactory';
import * as import72 from './+terms/privacy/privacy.component.ngfactory';
import * as import73 from './+terms/cookies/cookies.component.ngfactory';
import * as import74 from './+trending/trending.component.ngfactory';
import * as import75 from './+trending/users/trending-users.component.ngfactory';
import * as import76 from './+trending/teams/trending-teams.component.ngfactory';
import * as import77 from './+user/single/single-user.component.ngfactory';
import * as import78 from './+404/404.component.ngfactory';
import * as import79 from './+about/about.component';
import * as import80 from './+about/how-it-works/how-it-works.component';
import * as import81 from './+about/welcome/welcome.component';
import * as import82 from './+about/who-we-are/who-we-are.component';
import * as import83 from './+about/press/press.component';
import * as import84 from './auth/components/login/login.component';
import * as import85 from './auth/components/signup/signup.component';
import * as import86 from './+contact/contact.component';
import * as import87 from './+contact/newsletters/newsletters.component';
import * as import88 from './create/create.component';
import * as import89 from './discover/discover.component';
import * as import90 from './+explore/explore.component';
import * as import91 from './+explore/featured/featured.component';
import * as import92 from './+explore/popular/popular.component';
import * as import93 from './+explore/categories/categories.component';
import * as import94 from './+help/help.component';
import * as import95 from './+help/faq/faq.component';
import * as import96 from './+help/support/support.component';
import * as import97 from './+highlights/highlights.component';
import * as import98 from './+jobs/jobs.component';
import * as import99 from './+project/single/single-project.component';
import * as import100 from './+project/single/dashboard/project-dashboard.component';
import * as import101 from './+search/search.component';
import * as import102 from './+settings/settings.component';
import * as import103 from './+team/single/single-team.component';
import * as import104 from './+team/single/dashboard/team-dashboard.component';
import * as import105 from './+terms/terms.component';
import * as import106 from './+terms/use/use.component';
import * as import107 from './+terms/privacy/privacy.component';
import * as import108 from './+terms/cookies/cookies.component';
import * as import109 from './+trending/trending.component';
import * as import110 from './+trending/users/trending-users.component';
import * as import111 from './+trending/teams/trending-teams.component';
import * as import112 from './+user/single/single-user.component';
import * as import113 from './+404/404.component';
import * as import114 from './auth/reducers/auth.reducers';
import * as import115 from './auth/services/auth.service';
import * as import116 from '@ngrx/store/src/reducer';
import * as import117 from '@ngrx/store/src/state';
import * as import118 from '@ngrx/store/src/store';
class AppModuleInjector extends import0.ɵNgModuleInjector<import1.AppModule> {
  _CommonModule_0:import2.CommonModule;
  _RouterModule_1:import3.RouterModule;
  _ɵba_2:import4.ɵba;
  _ReactiveFormsModule_3:import4.ReactiveFormsModule;
  _SharedComponentsModule_4:import5.SharedComponentsModule;
  _SharedModule_5:import6.SharedModule;
  _AboutRoutingModule_6:import7.AboutRoutingModule;
  _AboutModule_7:import8.AboutModule;
  _AuthRoutingModule_8:import9.AuthRoutingModule;
  _AuthModule_9:import10.AuthModule;
  _ContactRoutingModule_10:import11.ContactRoutingModule;
  _ContactModule_11:import12.ContactModule;
  _CreateRoutingModule_12:import13.CreateRoutingModule;
  _CreateModule_13:import14.CreateModule;
  _DiscoverRoutingModule_14:import15.DiscoverRoutingModule;
  _DiscoverModule_15:import16.DiscoverModule;
  _ExploreRoutingModule_16:import17.ExploreRoutingModule;
  _ExploreModule_17:import18.ExploreModule;
  _HelpRoutingModule_18:import19.HelpRoutingModule;
  _HelpModule_19:import20.HelpModule;
  _HighlightsRoutingModule_20:import21.HighlightsRoutingModule;
  _HighlightsModule_21:import22.HighlightsModule;
  _JobsRoutingModule_22:import23.JobsRoutingModule;
  _JobsModule_23:import24.JobsModule;
  _ProjectRoutingModule_24:import25.ProjectRoutingModule;
  _ProjectModule_25:import26.ProjectModule;
  _SearchRoutingModule_26:import27.SearchRoutingModule;
  _SearchModule_27:import28.SearchModule;
  _SettingsRoutingModule_28:import29.SettingsRoutingModule;
  _SettingsModule_29:import30.SettingsModule;
  _TeamRoutingModule_30:import31.TeamRoutingModule;
  _TeamModule_31:import32.TeamModule;
  _TermsRoutingModule_32:import33.TermsRoutingModule;
  _TermsModule_33:import34.TermsModule;
  _TrendingRoutingModule_34:import35.TrendingRoutingModule;
  _TrendingModule_35:import36.TrendingModule;
  _UserRoutingModule_36:import37.UserRoutingModule;
  _UserModule_37:import38.UserModule;
  _AppRoutingModule_38:import39.AppRoutingModule;
  _NotFoundRoutingModule_39:import40.NotFoundRoutingModule;
  _StoreModule_40:import41.StoreModule;
  _AppModule_41:import1.AppModule;
  __NgLocalization_42:import2.NgLocaleLocalization;
  __FormBuilder_43:import4.FormBuilder;
  __ɵi_44:import4.ɵi;
  __ROUTES_45:any[];
  __Dispatcher_46:import42.Dispatcher;
  ___INITIAL_REDUCER_47:any;
  __INITIAL_REDUCER_48:any;
  __Reducer_49:any;
  ___INITIAL_STATE_50:any;
  __INITIAL_STATE_51:any;
  __State_52:any;
  __Store_53:any;
  __AuthModelService_54:import43.AuthModelService;
  __APP_BASE_HREF_55:any;
  constructor(parent:import0.Injector) {
    super(parent,[
      import44.AboutComponentNgFactory,
      import45.HowItWorksComponentNgFactory,
      import46.WelcomeComponentNgFactory,
      import47.WhoWeAreComponentNgFactory,
      import48.PressComponentNgFactory,
      import49.LoginComponentNgFactory,
      import50.SignupComponentNgFactory,
      import51.ContactComponentNgFactory,
      import52.NewslettersComponentNgFactory,
      import53.CreateComponentNgFactory,
      import54.DiscoverComponentNgFactory,
      import55.ExploreComponentNgFactory,
      import56.FeaturedComponentNgFactory,
      import57.PopularComponentNgFactory,
      import58.CategoriesComponentNgFactory,
      import59.HelpComponentNgFactory,
      import60.FaqComponentNgFactory,
      import61.SupportComponentNgFactory,
      import62.HighlightsComponentNgFactory,
      import63.JobsComponentNgFactory,
      import64.SingleProjectComponentNgFactory,
      import65.ProjectDashboardComponentNgFactory,
      import66.SearchComponentNgFactory,
      import67.SettingsComponentNgFactory,
      import68.SingleTeamComponentNgFactory,
      import69.TeamDashboardComponentNgFactory,
      import70.TermsComponentNgFactory,
      import71.UseComponentNgFactory,
      import72.PrivacyComponentNgFactory,
      import73.CookiesComponentNgFactory,
      import74.TrendingComponentNgFactory,
      import75.TrendingUsersComponentNgFactory,
      import76.TrendingTeamsComponentNgFactory,
      import77.SingleUserComponentNgFactory,
      import78.NotFoundComponentNgFactory
    ]
    ,([] as any[]));
  }
  get _NgLocalization_42():import2.NgLocaleLocalization {
    if ((this.__NgLocalization_42 == null)) { (this.__NgLocalization_42 = new import2.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID))); }
    return this.__NgLocalization_42;
  }
  get _FormBuilder_43():import4.FormBuilder {
    if ((this.__FormBuilder_43 == null)) { (this.__FormBuilder_43 = new import4.FormBuilder()); }
    return this.__FormBuilder_43;
  }
  get _ɵi_44():import4.ɵi {
    if ((this.__ɵi_44 == null)) { (this.__ɵi_44 = new import4.ɵi()); }
    return this.__ɵi_44;
  }
  get _ROUTES_45():any[] {
    if ((this.__ROUTES_45 == null)) { (this.__ROUTES_45 = [
      [
        {
          path: 'about',
          component: import79.AboutComponent
        }
        ,
        {
          path: 'about/how-it-works',
          component: import80.HowItWorksComponent
        }
        ,
        {
          path: 'about/welcome',
          component: import81.WelcomeComponent
        }
        ,
        {
          path: 'about/who-we-are',
          component: import82.WhoWeAreComponent
        }
        ,
        {
          path: 'about/press',
          component: import83.PressComponent
        }

      ]
      ,
      [
        {
          path: 'login',
          component: import84.LoginComponent
        }
        ,
        {
          path: 'signup',
          component: import85.SignupComponent
        }

      ]
      ,
      [
        {
          path: 'contact',
          component: import86.ContactComponent
        }
        ,
        {
          path: 'newsletters',
          component: import87.NewslettersComponent
        }

      ]
      ,
        [{
          path: 'create',
          component: import88.CreateComponent
        }
      ],
        [{
          path: 'discover',
          component: import89.DiscoverComponent
        }
      ],
      [
        {
          path: 'explore',
          component: import90.ExploreComponent
        }
        ,
        {
          path: 'explore/featured',
          component: import91.FeaturedComponent
        }
        ,
        {
          path: 'explore/popular',
          component: import92.PopularComponent
        }
        ,
        {
          path: 'explore/categories',
          component: import93.CategoriesComponent
        }

      ]
      ,
      [
        {
          path: 'help',
          component: import94.HelpComponent
        }
        ,
        {
          path: 'help/faq',
          component: import95.FaqComponent
        }
        ,
        {
          path: 'help/support',
          component: import96.SupportComponent
        }

      ]
      ,
        [{
          path: 'highlights',
          component: import97.HighlightsComponent
        }
      ],
        [{
          path: 'jobs',
          component: import98.JobsComponent
        }
      ],
      [
        {
          path: 'project/:slug',
          component: import99.SingleProjectComponent
        }
        ,
        {
          path: 'project/:slug/dashboard',
          component: import100.ProjectDashboardComponent
        }
        ,
        {
          path: 'project/:slug/dashboard/applications',
          component: import100.ProjectDashboardComponent
        }
        ,
        {
          path: 'project/:slug/dashboard/application/:application_id',
          component: import100.ProjectDashboardComponent
        }

      ]
      ,
        [{
          path: 'search',
          component: import101.SearchComponent
        }
      ],
        [{
          path: 'settings',
          component: import102.SettingsComponent
        }
      ],
      [
        {
          path: 'team/:slug',
          component: import103.SingleTeamComponent
        }
        ,
        {
          path: 'team/:slug/dashboard',
          component: import104.TeamDashboardComponent
        }

      ]
      ,
      [
        {
          path: 'terms',
          component: import105.TermsComponent
        }
        ,
        {
          path: 'terms/use',
          component: import106.UseComponent
        }
        ,
        {
          path: 'terms/privacy',
          component: import107.PrivacyComponent
        }
        ,
        {
          path: 'terms/cookies',
          component: import108.CookiesComponent
        }

      ]
      ,
      [
        {
          path: 'trending',
          component: import109.TrendingComponent
        }
        ,
        {
          path: 'trending/users',
          component: import110.TrendingUsersComponent
        }
        ,
        {
          path: 'trending/teams',
          component: import111.TrendingTeamsComponent
        }

      ]
      ,
        [{
          path: 'user/:slug',
          component: import112.SingleUserComponent
        }
      ],
        [{
          path: '',
          redirectTo: '/discover',
          pathMatch: 'full'
        }
      ],
      [
        {
          path: '404',
          component: import113.NotFoundComponent
        }
        ,
        {
          path: '**',
          redirectTo: '/404'
        }

      ]

    ]
    ); }
    return this.__ROUTES_45;
  }
  get _Dispatcher_46():import42.Dispatcher {
    if ((this.__Dispatcher_46 == null)) { (this.__Dispatcher_46 = new import42.Dispatcher()); }
    return this.__Dispatcher_46;
  }
  get __INITIAL_REDUCER_47():any {
    if ((this.___INITIAL_REDUCER_47 == null)) { (this.___INITIAL_REDUCER_47 = {auth: import114.authReducer}); }
    return this.___INITIAL_REDUCER_47;
  }
  get _INITIAL_REDUCER_48():any {
    if ((this.__INITIAL_REDUCER_48 == null)) { (this.__INITIAL_REDUCER_48 = import41._initialReducerFactory(this.__INITIAL_REDUCER_47)); }
    return this.__INITIAL_REDUCER_48;
  }
  get _Reducer_49():any {
    if ((this.__Reducer_49 == null)) { (this.__Reducer_49 = import41._reducerFactory(this._Dispatcher_46,this._INITIAL_REDUCER_48)); }
    return this.__Reducer_49;
  }
  get __INITIAL_STATE_50():any {
    if ((this.___INITIAL_STATE_50 == null)) { (this.___INITIAL_STATE_50 = (undefined as any)); }
    return this.___INITIAL_STATE_50;
  }
  get _INITIAL_STATE_51():any {
    if ((this.__INITIAL_STATE_51 == null)) { (this.__INITIAL_STATE_51 = import41._initialStateFactory(this.__INITIAL_STATE_50,this._INITIAL_REDUCER_48)); }
    return this.__INITIAL_STATE_51;
  }
  get _State_52():any {
    if ((this.__State_52 == null)) { (this.__State_52 = import41._stateFactory(this._INITIAL_STATE_51,this._Dispatcher_46,this._Reducer_49)); }
    return this.__State_52;
  }
  get _Store_53():any {
    if ((this.__Store_53 == null)) { (this.__Store_53 = import41._storeFactory(this._Dispatcher_46,this._Reducer_49,this._State_52)); }
    return this.__Store_53;
  }
  get _AuthModelService_54():import43.AuthModelService {
    if ((this.__AuthModelService_54 == null)) { (this.__AuthModelService_54 = new import43.AuthModelService(this.parent.get(import115.AuthService),this._Store_53)); }
    return this.__AuthModelService_54;
  }
  get _APP_BASE_HREF_55():any {
    if ((this.__APP_BASE_HREF_55 == null)) { (this.__APP_BASE_HREF_55 = '/'); }
    return this.__APP_BASE_HREF_55;
  }
  createInternal():import1.AppModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._RouterModule_1 = new import3.RouterModule(this.parent.get(import3.ɵa,(null as any)));
    this._ɵba_2 = new import4.ɵba();
    this._ReactiveFormsModule_3 = new import4.ReactiveFormsModule();
    this._SharedComponentsModule_4 = new import5.SharedComponentsModule();
    this._SharedModule_5 = new import6.SharedModule();
    this._AboutRoutingModule_6 = new import7.AboutRoutingModule();
    this._AboutModule_7 = new import8.AboutModule();
    this._AuthRoutingModule_8 = new import9.AuthRoutingModule();
    this._AuthModule_9 = new import10.AuthModule();
    this._ContactRoutingModule_10 = new import11.ContactRoutingModule();
    this._ContactModule_11 = new import12.ContactModule();
    this._CreateRoutingModule_12 = new import13.CreateRoutingModule();
    this._CreateModule_13 = new import14.CreateModule();
    this._DiscoverRoutingModule_14 = new import15.DiscoverRoutingModule();
    this._DiscoverModule_15 = new import16.DiscoverModule();
    this._ExploreRoutingModule_16 = new import17.ExploreRoutingModule();
    this._ExploreModule_17 = new import18.ExploreModule();
    this._HelpRoutingModule_18 = new import19.HelpRoutingModule();
    this._HelpModule_19 = new import20.HelpModule();
    this._HighlightsRoutingModule_20 = new import21.HighlightsRoutingModule();
    this._HighlightsModule_21 = new import22.HighlightsModule();
    this._JobsRoutingModule_22 = new import23.JobsRoutingModule();
    this._JobsModule_23 = new import24.JobsModule();
    this._ProjectRoutingModule_24 = new import25.ProjectRoutingModule();
    this._ProjectModule_25 = new import26.ProjectModule();
    this._SearchRoutingModule_26 = new import27.SearchRoutingModule();
    this._SearchModule_27 = new import28.SearchModule();
    this._SettingsRoutingModule_28 = new import29.SettingsRoutingModule();
    this._SettingsModule_29 = new import30.SettingsModule();
    this._TeamRoutingModule_30 = new import31.TeamRoutingModule();
    this._TeamModule_31 = new import32.TeamModule();
    this._TermsRoutingModule_32 = new import33.TermsRoutingModule();
    this._TermsModule_33 = new import34.TermsModule();
    this._TrendingRoutingModule_34 = new import35.TrendingRoutingModule();
    this._TrendingModule_35 = new import36.TrendingModule();
    this._UserRoutingModule_36 = new import37.UserRoutingModule();
    this._UserModule_37 = new import38.UserModule();
    this._AppRoutingModule_38 = new import39.AppRoutingModule();
    this._NotFoundRoutingModule_39 = new import40.NotFoundRoutingModule();
    this._StoreModule_40 = new import41.StoreModule();
    this._AppModule_41 = new import1.AppModule();
    return this._AppModule_41;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.RouterModule)) { return this._RouterModule_1; }
    if ((token === import4.ɵba)) { return this._ɵba_2; }
    if ((token === import4.ReactiveFormsModule)) { return this._ReactiveFormsModule_3; }
    if ((token === import5.SharedComponentsModule)) { return this._SharedComponentsModule_4; }
    if ((token === import6.SharedModule)) { return this._SharedModule_5; }
    if ((token === import7.AboutRoutingModule)) { return this._AboutRoutingModule_6; }
    if ((token === import8.AboutModule)) { return this._AboutModule_7; }
    if ((token === import9.AuthRoutingModule)) { return this._AuthRoutingModule_8; }
    if ((token === import10.AuthModule)) { return this._AuthModule_9; }
    if ((token === import11.ContactRoutingModule)) { return this._ContactRoutingModule_10; }
    if ((token === import12.ContactModule)) { return this._ContactModule_11; }
    if ((token === import13.CreateRoutingModule)) { return this._CreateRoutingModule_12; }
    if ((token === import14.CreateModule)) { return this._CreateModule_13; }
    if ((token === import15.DiscoverRoutingModule)) { return this._DiscoverRoutingModule_14; }
    if ((token === import16.DiscoverModule)) { return this._DiscoverModule_15; }
    if ((token === import17.ExploreRoutingModule)) { return this._ExploreRoutingModule_16; }
    if ((token === import18.ExploreModule)) { return this._ExploreModule_17; }
    if ((token === import19.HelpRoutingModule)) { return this._HelpRoutingModule_18; }
    if ((token === import20.HelpModule)) { return this._HelpModule_19; }
    if ((token === import21.HighlightsRoutingModule)) { return this._HighlightsRoutingModule_20; }
    if ((token === import22.HighlightsModule)) { return this._HighlightsModule_21; }
    if ((token === import23.JobsRoutingModule)) { return this._JobsRoutingModule_22; }
    if ((token === import24.JobsModule)) { return this._JobsModule_23; }
    if ((token === import25.ProjectRoutingModule)) { return this._ProjectRoutingModule_24; }
    if ((token === import26.ProjectModule)) { return this._ProjectModule_25; }
    if ((token === import27.SearchRoutingModule)) { return this._SearchRoutingModule_26; }
    if ((token === import28.SearchModule)) { return this._SearchModule_27; }
    if ((token === import29.SettingsRoutingModule)) { return this._SettingsRoutingModule_28; }
    if ((token === import30.SettingsModule)) { return this._SettingsModule_29; }
    if ((token === import31.TeamRoutingModule)) { return this._TeamRoutingModule_30; }
    if ((token === import32.TeamModule)) { return this._TeamModule_31; }
    if ((token === import33.TermsRoutingModule)) { return this._TermsRoutingModule_32; }
    if ((token === import34.TermsModule)) { return this._TermsModule_33; }
    if ((token === import35.TrendingRoutingModule)) { return this._TrendingRoutingModule_34; }
    if ((token === import36.TrendingModule)) { return this._TrendingModule_35; }
    if ((token === import37.UserRoutingModule)) { return this._UserRoutingModule_36; }
    if ((token === import38.UserModule)) { return this._UserModule_37; }
    if ((token === import39.AppRoutingModule)) { return this._AppRoutingModule_38; }
    if ((token === import40.NotFoundRoutingModule)) { return this._NotFoundRoutingModule_39; }
    if ((token === import41.StoreModule)) { return this._StoreModule_40; }
    if ((token === import1.AppModule)) { return this._AppModule_41; }
    if ((token === import2.NgLocalization)) { return this._NgLocalization_42; }
    if ((token === import4.FormBuilder)) { return this._FormBuilder_43; }
    if ((token === import4.ɵi)) { return this._ɵi_44; }
    if ((token === import3.ROUTES)) { return this._ROUTES_45; }
    if ((token === import42.Dispatcher)) { return this._Dispatcher_46; }
    if ((token === import41._INITIAL_REDUCER)) { return this.__INITIAL_REDUCER_47; }
    if ((token === import41.INITIAL_REDUCER)) { return this._INITIAL_REDUCER_48; }
    if ((token === import116.Reducer)) { return this._Reducer_49; }
    if ((token === import41._INITIAL_STATE)) { return this.__INITIAL_STATE_50; }
    if ((token === import41.INITIAL_STATE)) { return this._INITIAL_STATE_51; }
    if ((token === import117.State)) { return this._State_52; }
    if ((token === import118.Store)) { return this._Store_53; }
    if ((token === import43.AuthModelService)) { return this._AuthModelService_54; }
    if ((token === import2.APP_BASE_HREF)) { return this._APP_BASE_HREF_55; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const AppModuleNgFactory:import0.NgModuleFactory<import1.AppModule> = new import0.NgModuleFactory<any>(AppModuleInjector,import1.AppModule);