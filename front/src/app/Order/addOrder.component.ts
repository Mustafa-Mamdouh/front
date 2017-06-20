import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { OrderService } from './order.service'
import { ServiceService } from '../Service/service.service';
import { IService } from '../Infrastructure/IService';
import { Order } from './Order.entity';
import { NgForm } from "@angular/forms";
import { IAttribute } from '../Infrastructure/IAttribute'
import { AddOrderDto } from './addOrder.dto';
import { SelectedListItem } from './selectedListItem.entity'
@Component({
    selector: 'ntg-add-order',
    templateUrl: './addOrder.component.html'
})
export class AddOrderComponent implements OnInit {
    loading: boolean = true;
    services = new Array<IService>();
    arrayofAttribute = new Array<IAttribute>();
    newOrder: AddOrderDto = new AddOrderDto();
    
    ngOnInit(): void {

        // this.orderService.getAllOrders().subscribe((data: any) => { this.loading = false; });
        console.log(this.newOrder);
        this.serviceService.getAllServices
            ().subscribe((data: any) => {
                if (data.messageResponseObj.code == "000") {
                    //Succed
                    this.services = data.serviceDtos;
                    console.log('service');
                    console.log(this.services);
                } else {
                    //Fail
                    alert("fail");
                }
            });
    }
    setListValue(data: string) {
        console.log(data);
        const [value, id] = data.split('-');
        console.log(id);
        console.log(value);
        for (let attr of this.newOrder.serviceDto.attributesValue) {
            if (attr.id == parseInt(id)) {
                attr.value = value;
            }

        }
    }
    viewAttr(serviceNumber: number) {
        console.log(serviceNumber);
        if (isNaN(serviceNumber)) {

            this.newOrder.serviceDto.attributesValue = new Array();
            return;
        }
        if (this.services[serviceNumber].attributeCollection != null) {
            this.newOrder.setValues(this.services[serviceNumber]);
            // this.arrayofAttribute = this.services[serviceNumber].attributeCollection;
            console.log(this.newOrder);
        }

    }


    public error = false;
    constructor(private orderService: OrderService, private serviceService: ServiceService)
    { }
    addOrder(form: NgForm) {
        // console.log(form);
        
        if (form.valid) {
            console.log("valid");
            console.log(this.newOrder);
            this.orderService.addOrder(this.newOrder).subscribe(
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
