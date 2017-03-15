/**
 * Created by admin on 2017/3/9.
 */

import {Injectable} from '@angular/core';
import {Car} from './Car';
import {Cars} from './mock-cars';


@Injectable()
export class CarService {

  getCars():Promise<Car[]> {
    //setTimeout(return Cars,5000);
    // return Cars;
    return Promise.resolve(Cars);


  }

}
