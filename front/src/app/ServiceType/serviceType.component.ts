import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";
import { ServiceType } from './serviceType.entity';
import { ServiceTypeService } from './serviceType.service';
@Component({
    selector: 'ServiceType-comp',
    templateUrl: './serviceType.component.html'

})
export class ServiceTypeComponent implements OnInit {
    serviceTypes = new Array<ServiceType>();
    newServiceType: ServiceType = new ServiceType();
    editServiceType: ServiceType = new ServiceType();
    deletedServiceType: ServiceType = new ServiceType;
    ServiceTypeRow: number;

    ngOnInit(): void {
        this.serviceTypeService.getall().subscribe(
            (data: any) => { 
                console.log( data);
                this.serviceTypes = data['servicetypes'] ;}
        )
    }
    addServiceType() {
        this.serviceTypeService.add(this.newServiceType).subscribe(
            (data: any) => {
                console.log(data);
                let temp = data['servicetype'];
                this.serviceTypes.push(temp);
                this.newServiceType = new ServiceType();
                this.changeDetectorRef.detectChanges();
            }
        );
    }
    deleteServiceTypeRow(rowIndex: number) {
        this.ServiceTypeRow = rowIndex;
        this.deletedServiceType.id = this.serviceTypes[rowIndex].id;
        this.deletedServiceType.serviceType = this.serviceTypes[rowIndex].serviceType;
    }
    deleteServiceType() {
        this.serviceTypeService.delete(this.deletedServiceType.id).subscribe(
            (data: any) => {
                console.log(JSON.stringify(data));
                if (data.messageResponseObj.code == "000") {
                    //sucess
                    this.serviceTypes.splice(this.ServiceTypeRow, 1);
                    this.changeDetectorRef.detectChanges();
                }
                else {
                    alert(fail);
                }
            });
    }
    edit(rowIndex: number) {
        this.ServiceTypeRow = rowIndex;
        this.editServiceType.id = this.serviceTypes[rowIndex].id;
        this.editServiceType.describtion = this.serviceTypes[rowIndex].describtion;
        this.editServiceType.serviceType = this.serviceTypes[rowIndex].serviceType;
    }
    updateServiceType() {
        console.log('update');
        this.serviceTypeService.update(this.editServiceType).subscribe(
            (data: any) => {
                this.serviceTypes[this.ServiceTypeRow].describtion = this.editServiceType.describtion;
                this.serviceTypes[this.ServiceTypeRow].serviceType = this.editServiceType.serviceType;
            }
        )

    }
    constructor(private serviceTypeService: ServiceTypeService,
        private changeDetectorRef: ChangeDetectorRef, private router: Router) { }
}