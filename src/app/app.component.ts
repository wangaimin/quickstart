import {Component} from '@angular/core';
import {Car} from './Car';
import {Cars} from './mock-cars';
import {CarService} from './car-service';
import {OnInit} from './@angular/core';
//添加一个构造函数，并定义一个私有属性。



@Component({
  selector: 'my-app',
  // template: `<h1>{{title}}</h1>
  //            <p>车型：{{car.name}}</p>
  //            <p>品牌：{{car.brand}}</p>
  //            <p>集团：{{car.group}}</p>
  //            <div><label>车型：</label><input type="text" [(ngModel)]="car.name"></div>`,
  template:`<h1>{{title}}</h1>
            <ul class="cars">
                <li *ngFor="let car of cars" (click)="clickCar(car)" [class.selected]="selectCar==car">
                 <span class="badge">{{car.brand}}</span>{{car.name}}
                </li>
            </ul>
            
            <car-detail [car]="selectCar"></car-detail>
            `,
  providers:[CarService],
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

// export class AppComponent {
//   constructor(private carService:CarService){};
//   title="汽车列表";
//   cars=this.carService.getCars();
//   selectCar:Car;
//   clickCar(car:Car):void {
//     this.selectCar=car;
//   }
// }


export class AppComponent implements OnInit{
  ngOnInit():void{
    console.log('OnInit');
    this.getCars();
  };
  constructor(private carService:CarService){};
  title="汽车列表";
  cars:Car[];
  getCars():void{
    this.carService.getCars().then(cars=>this.cars=cars);
  };
  selectCar:Car;
  clickCar(car:Car):void {
    this.selectCar=car;
  }
}


