import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BeansEffects } from '../beans/state/beans.effects';
import { appReducer } from './app.state';


@NgModule({
  imports: [
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([BeansEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      autoPause: true,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    })
  ],
  exports: [StoreModule]
})
export class StorageModule { }
