import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { OrderService } from './order.service'
import { ServiceService } from '../Service/service.service';
import { IService } from '../Infrastructure/IService';
import { Order } from './Order.entity';
import { NgForm } from "@angular/forms";
import { IAttribute } from '../Infrastructure/IAttribute'
import{AddOrderDto} from './addOrder.dto';
@Component({
    selector: 'ntg-add-order',
    templateUrl: './addOrder.component.html'
})
export class AddOrderComponent implements OnInit {
    loading: boolean = true;
    services = new Array<IService>();
    arrayofAttribute = new Array<IAttribute>();
    newOrder:AddOrderDto=new AddOrderDto();
    ngOnInit(): void {
        this.orderService.getAllOrders().subscribe((data: any) => { this.loading = false; });
        this.serviceService.getAllServices
        ().subscribe((data: any) => {
            if (data.messageResponseObj.code == "000") {
                //Succed
                this.services = data.serviceDtos;

                console.log(this.services);
            } else {
                //Fail
                alert("fail");
            }
        });
    }
    viewAttr(serviceNumber: number) {
        if (isNaN(serviceNumber)) {

            this.arrayofAttribute = new Array<IAttribute>();
            return;
        }
        if (this.services[serviceNumber].attributeCollection != null) {
            this.order.setValues( this.services[serviceNumber]);
            this.arrayofAttribute = this.services[serviceNumber].attributeCollection;
            console.log(this.arrayofAttribute);
        }
        else
            this.arrayofAttribute = new Array<IAttribute>();
    }

    order: Order = new Order;
    public error = false;
    constructor(private orderService: OrderService, private serviceService: ServiceService)
    { }
    addOrder(form: NgForm): void {
        // console.log(form);
        console.log(this.order);
        if (form.valid) {
            console.log("valid");
            this.orderService.addOrder(this.order).subscribe(
                (response: any) => {
                    console.log(response);
                    let responseMessage = response.json();
                    console.log("ay7aga");
                    console.log(responseMessage);
                    console.log("messageResponseObj " + responseMessage['messageResponseObj']);
                    if (parseInt(responseMessage['messageResponseObj'].code) == 0) {
                        console.log("if");
                        return responseMessage['order'];
                    }
                    else {
                        console.log("else");
                        this.error = true;

                    }
                }
            );
        }
    }
    // onSubmit(form: NgForm) {
    //     this.orderService.addOrder(this.order).subscribe();
    // }
}