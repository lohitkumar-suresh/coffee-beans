import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeanListComponent } from './beans/beans-list/bean-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header/header.component';
import { FooterComponent } from './layout/footer/footer/footer.component';
import { MaterialModule } from './shared/material.module';
import { BeanDetailComponent } from './beans/bean-detail/bean-detail.component';
import { StorageModule } from './store/storage.module';

@NgModule({
  declarations: [
    AppComponent,
    BeanListComponent,
    HeaderComponent,
    FooterComponent,
    BeanDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    StorageModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
