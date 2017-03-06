import { Component, OnInit, Inject, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core'

import { MetaService, MetaDefinition }                                           from '../shared/services/meta'
import { ApiService }                                                            from '../shared/services/api';
import gql                                                                       from 'graphql-tag';

import * as $ from 'jquery';
declare var Swiper:any;


@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'discover',
  styleUrls: [ './discover.component.css' ],
  templateUrl: './discover.component.html'
})
export class DiscoverComponent implements OnInit {
  slides: any[] = [];
  explore: any[] = [];
  recommended: any[] = [];
  users: any[] = [];
  meta: MetaDefinition[] = [];

  constructor(
    @Inject('isBrowser') private _isBrowser: Boolean,
    private _meta: MetaService,
    private _api: ApiService
  ) {
    this.universalInit();

    this.meta = [
      { name: 'description', content: 'Set by meta setter service', id: 'desc' },
      // Twitter
      { name: 'twitter:title', content: 'Set by meta setter service' },
      // Google+
      { itemprop: 'name', content: 'Set by meta setter service' },
      { itemprop: 'description', content: 'Set by meta setter service' },
      // Facebook / Open Graph
      { property: 'fb:app_id', content: 'Set by meta setter service' },
      { property: 'og:title', content: 'Set by meta setter service' }
    ];
  }

  universalInit(): void {
    /*this._api.query({}).subscribe(res => {
      this.slides = res.results;
      if (this._isBrowser) {
        this.initSlider('main', {
          loop: true,
          autoplay: 8000,
          autoplayDisableOnInteraction: false,
          pagination: '.swiper-main-pagination',
          prevButton: '.swiper-main-button-prev',
          nextButton: '.swiper-main-button-next',
          paginationClickable: true
        });
      }
    });*/
  
  }

  ngOnInit(): void {
    this._meta.setTitle('Discover');
    this._meta.addTags(this.meta);

    if (this._isBrowser) {
      $(document).ready(function () {
        var exploreSwiper = new Swiper ('.swiper-explore', {
          direction: 'vertical',
          loop: true,
          autoplay: 8000,
          autoplayDisableOnInteraction: false,
          pagination: '.swiper-explore-pagination',
          paginationClickable: true
        });
      });
    }
  }

  initSlider(id: string, options: Object): void {
    $(document).ready(function () {
      var mainSwiper = new Swiper (`.swiper-${id}`, options);
    });
  }

}
