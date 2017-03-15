/**
 * Created by admin on 2017/3/8.
 */

import {Component,Input} from '@angular/core';
import {Car} from './Car';

@Component({
  selector:"car-detail",
  template:`
            <div *ngIf="car" >
              <h2>{{car.name}} 详情</h2>
              <p><input type="text"   [(ngModel)]="car.name"></p>
              <p>车型：{{car.name}}</p>
              <p>品牌：{{car.brand}}</p>
              <p>集团：{{car.group}}</p>
            </div>
           `
})

export class CarDetailComponent{
  @Input()
  car:Car
}
