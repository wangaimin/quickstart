/**
 * Created by admin on 2017/3/28.
 */
import {Component} from '@angular/core'
import {Car} from './Car'

@Component({
   moduleId:module.id,
  selector:'car-form',
  templateUrl:'./car-form.component.html'
})

export class CarFormComponent{
  submitted=false;
  groups=["大众集团","通用集团","上汽集团"];
  model=new Car(1,"荣威350","荣威","上汽集团");

  addCar(){
    this.model=new Car(1,"","","");
  }
  onSubmit(){
    this.submitted=true;
  }
}
