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
import {CarFormComponent} from "./car-form.component";
import {CustomFormsModule} from "ng2-validation";




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    CustomFormsModule
  ],
  declarations: [
    AppComponent,
    CarsComponent,
    CarDetailComponent,
    TopComponent,
    CarSearchComponent,
    CarFormComponent
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
