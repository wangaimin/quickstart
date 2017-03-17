import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';//双向绑定需要导入

import {AppRoutingModule} from "./app-routing.component";

import {AppComponent}  from './app.component';
import {CarsComponent} from './cars.component'
import {CarDetailComponent} from './car-detail.component'
import {TopComponent} from './top.component'

import {CarService} from './car-service'



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CarsComponent,
    CarDetailComponent,
    TopComponent
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
