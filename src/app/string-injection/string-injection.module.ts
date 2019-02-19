import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';

export interface TestConfig {
  testString: string;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class StringInjectionModule {
  static forRoot(config: TestConfig): ModuleWithProviders {
    return {
      ngModule: StringInjectionModule,
      providers: [
        { provide: 'TestConfig', useValue: config }
      ]
    };
  }
 }
