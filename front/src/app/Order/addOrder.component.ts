import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { OrderService } from './order.service'
import { Order } from './Order.entity';
import { NgForm } from "@angular/forms";
@Component({
    selector: 'ntg-add-order',
    templateUrl: './addOrder.component.html'
})
export class AddOrderComponent implements OnInit {
        ngOnInit(): void {
           this.orderService.getAllOrders().subscribe();
        }

    order: Order = new Order;
    constructor(private orderService: OrderService)
    { }
    addOrder() {
        this.orderService.addOrder(this.order).subscribe();
    }
    onSubmit(form: NgForm) {
        this.orderService.addOrder(this.order).subscribe();
    }
}