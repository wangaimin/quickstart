/**
 * Created by admin on 2017/3/9.
 */

import {Injectable} from '@angular/core';
import {Car} from './Car';
import {Cars} from './mock-cars';
import {Http, Headers} from '@angular/http'
import 'rxjs/add/operator/toPromise'

//@Injectable() 标识一个类可以被注入器实例化。 我们需要它，因为 Angular 需要构造函数参数的元数据来注入一个Http

//注入器同时负责实例化像HerosComponent这样的组件。为什么不标记HerosComponent为@Injectable()呢？
//我们可以添加它。但是没有必要，因为HerosComponent已经有@Component装饰器了， @Component（和随后将会学到的@Directive和@Pipe一样）是 Injectable 的子类型。
//实际上，正是这些Injectable装饰器是把一个类标识为注入器实例化的目标。

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
