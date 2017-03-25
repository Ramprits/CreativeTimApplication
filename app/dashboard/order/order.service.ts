import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import { Subscription } from "rxjs/Subscription";
import { IOrder } from "./order.module";

import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'

@Injectable()
export class OrderService {
     private baseURL = 'app/common/Order.json'
     constructor(private _http: Http) {
     }
     GetOrders(): Observable<IOrder[]> {
          return this._http.get(this.baseURL)
               .map((response: Response) => <IOrder[]>response.json())
               // .do(data => console.log('All :' + JSON.stringify(data))).catch(this.handleError);
     }
     private handleError(error: Response) {
          console.error(error);
          return Observable.throw(error.json().error || 'Server error')
     }
}