import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { Http } from '@angular/http';

console.log(`Environment is ${JSON.stringify(environment)}`);
@Component({
  selector: 'sn-root',
  template: `
    <h1>
     Sticky Notes 
    </h1>
    <hr>
    <sn-note-container></sn-note-container>
  `,
  styles: []
})
export class AppComponent {
  constructor(http: Http) {
    window['http'] = http;
  }
}
