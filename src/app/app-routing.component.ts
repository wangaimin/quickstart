/**
 * Created by admin on 2017/3/17.
 */
import {RouterModule, Routes} from '@angular/router'
import {CarsComponent} from "./cars.component";
import {TopComponent} from "./top.component";
import {CarDetailComponent} from "./car-detail.component";
import {NgModule} from "@angular/core";

const routes:Routes=[
  {path: 'cars', component: CarsComponent},
  {path: `top`,component: TopComponent},
  {path: `detail/:id`, component: CarDetailComponent}
  ];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{}
