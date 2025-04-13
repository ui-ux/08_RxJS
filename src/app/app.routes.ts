import { Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { COnDestroyComponent } from './c-on-destroy/c-on-destroy.component';
import { DTakeUntilComponent } from './d-take-until/d-take-until.component';
import { BasicObservableComponent } from './basicObservable/basicObservable.component';
import { A11NumberObservableComponent } from './a-11-number-observable/a-11-number-observable.component';
import { ApiRequestServiceComponent } from './api-request-service/api-request-service.component';
import { OfComponent } from './of/of.component';
import { FromComponent } from './from/from.component';
import { From2Component } from './from-2/from-2.component';
import { IntervalComponent } from './interval/interval.component';
import { TimerComponent } from './timer/timer.component';
import { FromEventComponent } from './from-event/from-event.component';

export const routes: Routes = [
  { path: '', redirectTo: 'base', pathMatch: 'full' },
  { path: 'base', component: BaseComponent },
  { path: 'on-destroy', component: COnDestroyComponent },
  { path: 'take-until', component: DTakeUntilComponent },
  { path: 'number-observable', component: A11NumberObservableComponent },
  { path: 'api-request-service', component: ApiRequestServiceComponent },
  { path: 'basic-observable', component: BasicObservableComponent },
  { path: 'of', component: OfComponent },
  { path: 'from-1', component: FromComponent },
  { path: 'from-2', component: From2Component },
  { path: 'interval', component: IntervalComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'fromEvent', component: FromEventComponent },
];
