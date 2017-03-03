import { Injectable, Inject }          from '@angular/core'
import { Title, Meta, MetaDefinition } from '@angular/platform-browser'


@Injectable()
export class MetaService {

  constructor(
    @Inject('isServer') private _isServer: Boolean,
    private _title: Title,
    private _meta: Meta
  ) {}

  setTitle(title: string): void {
    this._title.setTitle(`Stitch » ${title}`);
  }

  addTags(tags: MetaDefinition[]): void {
    if(this._isServer) {
      this._meta.addTags(tags);
    }
  }

}
