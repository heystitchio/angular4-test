import { AfterViewInit, Component, OnInit, Inject, 
        ChangeDetectionStrategy, ViewEncapsulation, ViewChild }    from '@angular/core'

import { MetaService, MetaDefinition, ApiService, SliderComponent,
         SliderOptions }                                           from '../../shared'
import gql                                                         from 'graphql-tag';


@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'discover',
  styleUrls: [ './discover.component.css' ],
  templateUrl: './discover.component.html'
})
export class DiscoverComponent implements OnInit, AfterViewInit {

  @ViewChild(SliderComponent) private _slider: SliderComponent;

  public mainSlides: any[] = [];
  public exploreSlides: any[] = [];
  public recommended: any[] = [];
  public users: any[] = [];
  public mainSliderOptions: SliderOptions = {};
  public exploreSliderOptions: SliderOptions = {};

  private _metaArray: MetaDefinition[] = [];

  constructor(
    @Inject('isBrowser') private _isBrowser: Boolean,
    private _meta: MetaService,
    private _api: ApiService
  ) {}

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
    this._metaArray = [
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
    this._meta.setTitle('Discover');
    this._meta.addTags(this._metaArray);

    this.mainSliderOptions = {
      loop: true,
      autoplay: 8000,
      autoplayDisableOnInteraction: false,
      paginationClickable: true
    };

    this.mainSlides = [
      "test",
      "test 2",
      "test 3"
    ];
  }

  ngAfterViewInit(): void {
    setTimeout(() => this._initSlider());
  }

  private _initSlider(): void {
    this._slider.initSlider();
  }

}
