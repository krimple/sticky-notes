import { Component } from '@angular/core';
import { environment } from '../environments/environment';

console.log(`Environment is ${JSON.stringify(environment)}`);
@Component({
  selector: 'sn-root',
  template: `
    <h1>
     Sticky Notes 
    </h1>
    <hr>
    <sn-note></sn-note>
  `,
  styles: []
})
export class AppComponent {
}
