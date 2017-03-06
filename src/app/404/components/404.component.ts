import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'not-found',
  template: '404 component'
})
export class NotFoundComponent {
  constructor() {}
}
