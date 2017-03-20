/**
 * Created by admin on 2017/3/9.
 */

import {Injectable} from '@angular/core';
import {Car} from './Car';
import {Cars} from './mock-cars';


@Injectable()
export class CarService {

  getCars():Promise<Car[]> {
       return Promise.resolve(Cars);
 };
 getCarsSlowly():Promise<Cars>{
   return new Promise(resolve=>{
     setTimeout(()=>resolve(this.getCars()),3000);
   });
 }
  getCar(id:Number):Promise<Car>{
    return this.getCars()
            .then(cars=>cars.find(car=>car.id===id));
  }

}
