import { Component } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'repro-app';

  constructor(private localStorageService: LocalStorageService) {
    this.localStorageService.set('testValue', 'test');
  }
}
