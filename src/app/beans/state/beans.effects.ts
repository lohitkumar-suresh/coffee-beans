import { getStoreStatus } from './beans.selectors';
import { loadBeans, loadBeansSuccess } from './beans.actions';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';
import { BeansService } from '../services/beans.service';
import { AppState } from 'src/app/store/app.state';
import { select, Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';

@Injectable()
export class BeansEffects {

  constructor(private actions$: Actions, private beansService: BeansService, private store: Store<AppState>){}

  loadBeans$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadBeans),
      withLatestFrom(this.store.pipe(select(getStoreStatus))),
      switchMap(([, loaded]) => {
        if(loaded) {
          return EMPTY
        }
        return this.beansService.getBeans().pipe(
          map((beans) => {
            return loadBeansSuccess({ beans });
          })
        );
      })
    );
  });

}
