/**
 * Created by admin on 2017/3/9.
 */

import {Injectable} from '@angular/core';
import {Car} from './Car';
import {Cars} from './mock-cars';
import {Http, Headers} from '@angular/http'
import 'rxjs/add/operator/toPromise'


@Injectable()
export class CarService {
  private serviceUrl='http://localhost:52181/api';
  private header=new Headers({'Content-Type':'application/json'});
  constructor(private http:Http){}

  getCarsByAPI():Promise<Car[]>{
    return this.http.get(this.serviceUrl+'/car/get').toPromise()
      .then(response=>response.json() as Car[])
      .catch(this.handleError);
  }
  getCars():Promise<Car[]> {
       return Promise.resolve(Cars);
 }
 getCarsSlowly():Promise<Car[]>{
   return new Promise(resolve=>{
     setTimeout(()=>resolve(this.getCars()),3000);
   });
 }
 update(car:Car):Promise<Car>{
   return this.http.post(this.serviceUrl+'/car/Update',car
     ,{headers:this.header}
     )
     .toPromise().then(()=>car).catch(this.handleError);
 }

  getCar(id:Number):Promise<Car>{
    return this.getCars()
            .then(cars=>cars.find(car=>car.id===id));
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
