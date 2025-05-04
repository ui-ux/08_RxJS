import { Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { COnDestroyComponent } from './c-on-destroy/c-on-destroy.component';
import { DTakeUntilComponent } from './Filtration-operators/take-until-all/d-take-until/d-take-until.component';
import { BasicObservableComponent } from './basicObservable/basicObservable.component';
import { A11NumberObservableComponent } from './a-11-number-observable/a-11-number-observable.component';
import { ApiRequestServiceComponent } from './api-request-service/api-request-service.component';
import { OfComponent } from './Standard Observables/of/of.component';
import { FromComponent } from './Standard Observables/from/from.component';
import { From2Component } from './Standard Observables/from-2/from-2.component';
import { IntervalComponent } from './Standard Observables/interval/interval.component';
import { TimerComponent } from './Standard Observables/timer/timer.component';
import { FromEventComponent } from './from-event/from-event.component';
import { COnDestroy2Component } from './c-on-destroy-2/c-on-destroy-2.component';
import { CatchErorComponent } from './catch-eror/catch-eror.component';
import { RetryComponent } from './Standard Observables/retry/retry.component';
import { MapComponent } from './Transformation operators/map/map.component';
import { FilterComponent } from './Transformation operators/filter/filter.component';
import { ScanComponent } from './Transformation operators/scan/scan.component';
import { MergeMapComponent } from './Transformation operators/merge-map/merge-map.component';
import { SwitchMapComponent } from './Transformation operators/switch-map/switch-map.component';
import { ConcatMapComponent } from './Transformation operators/concat-map/concat-map.component';
import { CombineLatestComponent } from './Combination operators/combine-latest/combine-latest.component';
import { MergeComponent } from './Combination operators/merge/merge.component';
import { ConcatComponent } from './Combination operators/concat/concat.component';
import { ZipComponent } from './Combination operators/zip/zip.component';
import { TakeComponent } from './Filtration-operators/take/take.component';
import { TakeUntilComponent } from './Filtration-operators/take-until-all/take-until/take-until.component';
import { SkipComponent } from './Filtration-operators/skip/skip.component';
import { DebounceTimeComponent } from './Filtration-operators/debounce-time/debounce-time.component';
import { DistinctUntilChangedComponent } from './Filtration-operators/distinct-until-changed/distinct-until-changed.component';
import { ThrottleTimeComponent } from './Flow-Control-Operators/throttle-time/throttle-time.component';
import { DelayComponent } from './Flow-Control-Operators/delay/delay.component';
import { BufferComponent } from './Flow-Control-Operators/buffer/buffer.component';
import { TimeoutComponent } from './Flow-Control-Operators/timeout/timeout.component';
import { SubjectComponent } from './Subject-Types/subject/subject.component';
import { BehaviorSubjectComponent } from './Subject-Types/behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './Subject-Types/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './Subject-Types/async-subject/async-subject.component';

export const routes: Routes = [
  { path: '', redirectTo: 'base', pathMatch: 'full' },
  { path: 'base', component: BaseComponent },
  { path: 'on-destroy', component: COnDestroyComponent },
  { path: 'on-destroy-2', component: COnDestroy2Component },
  { path: 'catch-eror', component: CatchErorComponent },
  { path: 'retry', component: RetryComponent },
  { path: 'number-observable', component: A11NumberObservableComponent },
  { path: 'api-request-service', component: ApiRequestServiceComponent },
  { path: 'basic-observable', component: BasicObservableComponent },
  { path: 'of', component: OfComponent },
  { path: 'from-1', component: FromComponent },
  { path: 'from-2', component: From2Component },
  { path: 'interval', component: IntervalComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'fromEvent', component: FromEventComponent },
  { path: 'map', component: MapComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'scan', component: ScanComponent },
  { path: 'merge-map', component: MergeMapComponent },
  { path: 'switch-map', component: SwitchMapComponent },
  { path: 'concat-map', component: ConcatMapComponent },
  { path: 'combine-latest', component: CombineLatestComponent },
  { path: 'merge', component: MergeComponent },
  { path: 'concat', component: ConcatComponent },
  { path: 'zip', component: ZipComponent },
  { path: 'take', component: TakeComponent },
  { path: 'take-until', component: TakeUntilComponent },
  { path: 'take-until-2', component: DTakeUntilComponent },
  { path: 'skip', component: SkipComponent },
  { path: 'debounce-time', component: DebounceTimeComponent },
  { path: 'distinct-until-changed', component: DistinctUntilChangedComponent },
  { path: 'throttle-time', component: ThrottleTimeComponent },
  { path: 'delay', component: DelayComponent },
  { path: 'buffer', component: BufferComponent },
  { path: 'timeout', component: TimeoutComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'behavior-subject', component: BehaviorSubjectComponent },
  { path: 'replay-subject', component: ReplaySubjectComponent },
  { path: 'async-subject', component: AsyncSubjectComponent },
];
