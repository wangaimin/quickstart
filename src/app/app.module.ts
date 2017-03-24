import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';//双向绑定需要导入
import { HttpModule,JsonpModule }    from '@angular/http';
import {AppRoutingModule} from "./app-routing.component";

import {AppComponent}  from './app.component';
import {CarsComponent} from './cars.component'
import {CarDetailComponent} from './car-detail.component'
import {TopComponent} from './top.component'

import {CarService} from './car-service'
import {CarSearchComponent} from "./car-search.component";



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CarsComponent,
    CarDetailComponent,
    TopComponent,
    CarSearchComponent
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
