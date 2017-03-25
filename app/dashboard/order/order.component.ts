import { Component, OnInit } from '@angular/core';
import { OrderService } from "./order.service";
import { IOrder } from "./order.module";

@Component({
  selector: 'app-order',
  moduleId: module.id,
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderes: IOrder[];
  constructor(private _orderService: OrderService) { }

  ngOnInit() {
    this._orderService.GetOrders().subscribe(ordere => { this.orderes = ordere });
  }

}