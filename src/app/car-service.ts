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
  getCar(id:Number):Promise<Car>{
    return this.getCars()
            .then(cars=>cars.find(car=>car.id===id));
  }

}
