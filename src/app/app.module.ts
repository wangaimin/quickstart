import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';//双向绑定需要导入

import { AppComponent }  from './app.component';
import {CarDetailComponent} from './car-detail.component'

@NgModule({
  imports:      [ BrowserModule ,
                  FormsModule],
  declarations: [
                  AppComponent,
                  CarDetailComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
