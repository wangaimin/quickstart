
/**
 * Created by admin on 2017/3/24.
 */

import {Injectable} from '@angular/core'
import {Observable} from "rxjs/Observable";
import {Car} from "./Car";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class CarSearchService{
  private serviceUrl='http://localhost:52181/api';
  constructor(private http:Http){}

  search(name:string):Observable<Car[]>{
   return this.http.get(this.serviceUrl+'car/Search?name=${name}')
     .map(response=>response.json() as Car[]);
  }
}
