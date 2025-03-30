import { Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { COnDestroyComponent } from './c-on-destroy/c-on-destroy.component';
import { DTakeUntilComponent } from './d-take-until/d-take-until.component';
import { OfComponent } from './of/of.component';
import { A11NumberObservableComponent } from './a-11-number-observable/a-11-number-observable.component';


export const routes: Routes = [
  { path: '', redirectTo: 'base', pathMatch: 'full'},
  { path: 'base', component: BaseComponent },
  { path: 'on-destroy', component: COnDestroyComponent },
  { path: 'take-until', component: DTakeUntilComponent },
  { path: 'number-observable', component:   A11NumberObservableComponent },

  { path: 'of', component: OfComponent },
];
