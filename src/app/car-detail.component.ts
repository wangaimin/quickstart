/**
 * Created by admin on 2017/3/8.
 */

import {Component,OnInit} from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router'
import {Location} from '@angular/common'
import {Car} from './Car';
import {CarService} from './car-service'
import 'rxjs/add/operator/switchMap'

@Component({
  moduleId:module.id,
  selector:"car-detail",
 templateUrl:'./car-detail.component.html'
})

export class CarDetailComponent implements OnInit{
  car:Car;
  constructor(
    private carService:CarService,
    private route:ActivatedRoute,
    private location:Location
  ){}
  ngOnInit():void{
    //id是数字，而路由参数的值总是字符串。 所以我们需要通过 JavaScript 的 (+) 操作符把路由参数的值转成数字。
    this.route.params.switchMap((params:Params)=>this.carService.getCar(+params['id']))
      .subscribe(car=>this.car=car);
  }
  goBack():void{
    this.location.back();
  }

}
