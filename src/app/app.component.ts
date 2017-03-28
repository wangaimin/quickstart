/**
 * Created by admin on 2017/3/16.
 */

import {Component} from '@angular/core';




@Component({
  selector:'my-app',
  template:`<h1>{{title}}</h1>
           <nav>
           <a routerLink="/top">top</a>
           <a routerLink="/cars">cars</a>
           <a routerLink="/search">seach</a>
           <a routerLink="/form">form</a>
           </nav>
           <router-outlet></router-outlet>`,

})

export class AppComponent{
  title="汽车列表";
}
