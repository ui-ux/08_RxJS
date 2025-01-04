import { Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
  { path: '', redirectTo: 'base', pathMatch: 'full'},
  { path: 'base', component: BaseComponent },
  { path: 'test', component: TestComponent },
];
