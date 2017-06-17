import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { OrderService } from './order.service'
import { Order } from './Order.entity';
import { OrderDto } from './orderdto.entity'
import { NgForm } from "@angular/forms";
@Component({
    selector: 'ntg-view-order',
    templateUrl: './viewOrder.component.html'
})
export class ViewOrder implements OnInit {
    ngOnInit(): void {
        //
        this.orderService.getAllOrders().subscribe(
            (data: any) => {this.ordersDto = data; console.log(this.ordersDto)});
        //
    }

    ordersDto: Array<OrderDto>;
    constructor(private orderService: OrderService)
    { }

 selectedOrder:OrderDto=new OrderDto();
    showAttributes(selectedRow:number)
    {
        this.selectedOrder=this.ordersDto[selectedRow];
        console.log(this.selectedOrder);
    }
}