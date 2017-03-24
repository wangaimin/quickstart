/**
 * Created by admin on 2017/3/24.
 */

import {Component, OnInit} from "@angular/core";
import {CarSearchService} from "./car-search.service";
//import {Observable, Subject} from "rxjs/Rx";
import {Observable} from 'rxjs/Observable'
import {Subject} from 'rxjs/Subject'

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {Car} from "./Car";

@Component({
  moduleId:module.id,
  selector:'car-search',
  templateUrl:'./car-search.component.html',
  styleUrls:['./car-search.component.css'],
  providers:[CarSearchService]
})

export class CarSearchComponent implements  OnInit{
  cars:Observable<Car[]>;
  private searchName=new Subject<string>();

  constructor(private carSearchService:CarSearchService){}

  search(name:string):void{
    this.searchName.next(name);
  }

  ngOnInit():void{
    this.cars=this.searchName
      .debounceTime(300)// wait 300ms after each keystroke before considering the name
      .distinctUntilChanged() // ignore if next search name is same as previous
      //switchMap会为每个从debounce和distinctUntilChanged中通过的搜索词调用搜索服务。 它会取消并丢弃以前的搜索可观察对象，只保留最近的
      .switchMap(name=>name?this.carSearchService.search(name)
        :Observable.of<Car[]>([]))// or the observable of empty cars if there was no search name
      .catch(error=>{
        console.log(error);
  return Observable.of<Car[]>([]);
      })
  }
}
