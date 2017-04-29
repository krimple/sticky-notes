import { Component } from '@angular/core';

@Component({
  selector: 'sn-root',
  template: `
  <h1>
    {{title}}
  </h1>
  `,
  styles: []
})
export class AppComponent {
  title = 'sn works!';
}
