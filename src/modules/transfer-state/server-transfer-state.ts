import { Injectable, Optional, RendererFactoryV2, ViewEncapsulation } from '@angular/core'
import { PlatformState }                                              from '@angular/platform-server'
import { TransferState }                                              from './transfer-state'


@Injectable()
export class ServerTransferState extends TransferState {

    constructor(
      private _state: PlatformState,
      private _rendererFactory: RendererFactoryV2
    ) {
      super();
    }

  inject() {
    try {
      const document: any = this._state.getDocument();
      const transferStateString = JSON.stringify(this.toJson());
      const renderer = this._rendererFactory.createRenderer(document, {
        id: '-1',
        encapsulation: ViewEncapsulation.None,
        styles: [],
        data: {}
      });

      console.log(document.children[0].next.children[0]);

      const head = document.children[0].next.children[0];
      if (head.name !== 'head') {
        throw new Error('Please have <head> as the first element in your document');
      }

      const script = renderer.createElement('script');
      renderer.setValue(script, `window['TRANSFER_STATE'] = ${transferStateString}`);
      renderer.appendChild(head, script);
    } catch (err) {
      console.error(err);
    }
  }

}
