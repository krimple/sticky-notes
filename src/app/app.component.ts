import { Component } from '@angular/core';
import { environment } from '../environments/environment';

console.log(`Environment is ${JSON.stringify(environment)}`);
@Component({
  selector: 'sn-root',
  template: `
    <h1>
      Hello, Angular 4 Students
    </h1>
  `,
  styles: []
})
export class AppComponent {
}
