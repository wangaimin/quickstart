import {Component} from '@angular/core';
import {Car} from './Car';
import {OnInit} from '@angular/core';
import {CarService} from './car-service'
import {Router} from '@angular/router'


@Component({
  moduleId: module.id,//添加styleUrls和templateUrl或templateUrls必须添加这段代码
  selector: 'my-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})

export class CarsComponent implements OnInit {
  cars:Car[];
  selectCar:Car;

  ngOnInit():void {
    console.log('OnInit');
    this.getCars();
  }

  constructor(private carService:CarService,
              private router:Router) {
  }

  getCars():void {
    // this.carService.getCars().then(cars=>this.cars = cars);
    this.carService.getCarsByAPI().then(cars=>this.cars = cars);
    console.log('上面的then为异步执行，等待请求有结果后执行then中的代码');
  }

  clickCar(car:Car):void {
    this.selectCar = car;
  }

  delete(car:Car):void {
    this.cars = this.cars.filter(m=>m !== car);
    if (this.selectCar === car) {
      this.selectCar = null;
    }
  }

  gotoDetail():void {
    this.router.navigate(['detail', this.selectCar.id])
  }
}


