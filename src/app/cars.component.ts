import {Component} from '@angular/core';
import {Car} from './Car';
import {OnInit} from '@angular/core';
import {CarService} from './car-service'
import {Router} from '@angular/router'


@Component({
  selector: 'my-cars',
  template: `
            <ul class="cars">
                <li *ngFor="let car of cars" (click)="clickCar(car)" [class.selected]="selectCar==car">
                <!--<a [routerLink]="['/detail',car.id]">-->
                 <span class="badge">{{car.brand}}</span>{{car.name}}
                 <!--</a>-->
                </li>
            </ul>
            <div  *ngIf="selectCar">
            <h2>{{selectCar.name|uppercase}}</h2>
            <button (click)="gotoDetail()" >查看详情</button>
            </div>
            <!--<car-detail [car]="selectCar"></car-detail>-->
            `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .cars {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .cars li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .cars li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .cars li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .cars .text {
    position: relative;
    top: -3px;
  }
  .cars .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]

})

export class CarsComponent implements OnInit {
  cars:Car[];
  selectCar:Car;

  ngOnInit():void {
    console.log('OnInit');
    this.getCars();
  }

  constructor(
    private carService:CarService,
    private router:Router
   ) {}

  getCars():void {
   // this.carService.getCars().then(cars=>this.cars = cars);
    this.carService.getCarsByAPI().then(cars=>this.cars = cars);
    console.log('上面的then为异步执行，等待请求有结果后执行then中的代码');
  }

  clickCar(car:Car):void {
    this.selectCar = car;
  }
  gotoDetail():void{
    this.router.navigate(['detail',this.selectCar.id])
  }
}


