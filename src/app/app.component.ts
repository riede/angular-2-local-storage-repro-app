import { Component, Inject, Optional } from '@angular/core';
import { TestConfig } from './string-injection/string-injection.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'repro-app';

  constructor(@Optional() @Inject('TestConfig') private config: TestConfig) {
    if (config) {
      console.log(this.config.testString);
    } else {
      console.log('Info - No Config provided');
    }
  }
}
