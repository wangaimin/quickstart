/**
 * Created by admin on 2017/3/16.
 */
import {Component,OnInit} from '@angular/core'
import {CarService} from './car-service'
import{Car} from './Car'

@Component({
  moduleId:module.id,
  selector:`my-top`,
  templateUrl:'./top.component.html',
})

export class TopComponent implements OnInit{
  constructor(private carService:CarService){};
  cars:Car[];
  ngOnInit():void{
    this.carService.getCars().then(cars=>this.cars=cars.slice(0,3));
  }
}
