import { loadBeans, loadBeansSuccess } from './beans.actions';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { BeansService } from '../services/beans.service';

@Injectable()
export class BeansEffects {

  constructor(private actions$: Actions, private beansService: BeansService){

  }
  loadBeans$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadBeans),
      mergeMap((action) => {
        return this.beansService.getBeans().pipe(
          map((beans) => {
            return loadBeansSuccess({ beans });
          })
        );
      })
    );
  });

}
