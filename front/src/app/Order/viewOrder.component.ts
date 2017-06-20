import { Component, OnInit, ChangeDetectorRef, AfterViewInit, AfterContentChecked } from '@angular/core';
import { OrderService } from './order.service'
import { Order } from './Order.entity';
import { OrderDto } from './orderdto.entity'
import { NgForm } from "@angular/forms";
import { Input } from '@angular/core';
@Component({
    selector: 'ntg-view-order',
    templateUrl: './viewOrder.component.html'
})
export class ViewOrder implements OnInit {
    OnInit(): void {

    }


    public loading = false;
    public error = false;
    ngOnInit(): void {
        // console.log('hello');
        this.orderService.getAllOrders().subscribe(
            (response: any) => {
                console.log(response);
                // let responseMessage = response;
                // if (parseInt(responseMessage['messageResponseObj'].code) == 0)
                // this.ordersDto = responseMessage['orderDtos'];
                // else
                //     this.error = true;
                this.ordersDto=response;
            });

    }

    ordersDto: Array<OrderDto>;
    constructor(private orderService: OrderService)
    { }

    selectedOrder: OrderDto = new OrderDto();
    showAttributes(selectedRow: number) {
        this.selectedOrder = this.ordersDto[selectedRow];
        console.log(this.selectedOrder);
    }
}