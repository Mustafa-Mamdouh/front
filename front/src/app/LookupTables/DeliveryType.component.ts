import { Component, OnInit, ChangeDetectorRef, Input, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { LookupService } from './Lookup.service';
import { IDeliveryType } from '../Infrastructure/IDeliveryType';
import { NgForm, FormBuilder, Validators } from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: 'DeliveryType',
    templateUrl: './DeliveryType.html',
    styleUrls: ['./Tabble.css']
})
export class DeliveryTypeComponent implements OnInit {
    servicename: string = "DeliveryType";
    components = new Array<IDeliveryType>();
    public toBeSaved = new IDeliveryType();
    toBeDeleted: number;
    @ViewChild('closeBtn') closeBtn: ElementRef;
    @ViewChild('closeBtn2') closeBtn2: ElementRef;
    @ViewChild('closeBtn3') closeBtn3: ElementRef;
    pagination: number[] = [];
    //var total rows
    totalRows: number;
    pagnum: number = 0;



    ngOnInit(): void {
        this.getComponent();
    }
    //getComponents
    getComponent() {
        this.lookupService.getAllObjects(this.servicename).subscribe(
            (data: any) => {
                if (data.messageResponseObj.code == "000") {
                    //Succed
                    this.components = data.deliveryTypes;
                }
                else {
                    //Fail
                    alert("fail");
                }
            });
    }
    //Close Modals
    closeModal() {
        //Close ADD modal
        this.closeBtn.nativeElement.click();
        //Close Edit Modal
        this.closeBtn2.nativeElement.click();
        //Close Delete Modal
        this.closeBtn3.nativeElement.click();
    }

    //Delete Component Method 
    //Argument >>e EVEnt
    deleteComponent() {
        //Call Delete Service with the ID of target Object
        this.lookupService.deleteObject(this.toBeDeleted, this.servicename).subscribe(
            (data: any) => {
                //Check response
                if (data.messageResponseObj.code == "000") {
                    //Succed
                    //Remove Deleted Object From View
                    this.components = this.components.filter(item => item.id != this.toBeDeleted);
                    this.closeModal();
                } else {
                    //Fail
                    alert("fail");
                }
            });
    }
    //get the id of target object before open modal 
    setDeletedID(e: any) {
        this.toBeDeleted = e.target.id;
    }

    //on cahnge select catgorey
    onChange(e: any) {
        //   this.toBeSaved.categoryId = this.catgories.filter(item => item.id == e.target.value)[0];

    }

    //add Component
    addComponent() {
        //call add services   
        this.lookupService.addObject(this.toBeSaved, this.servicename).subscribe(
            (data: any) => {
                if (data.messageResponseObj.code == "000") {
                    //Succed
                    //add object to view
                    this.toBeSaved.id = data.pcDeliveryType.id;
                    this.components.push(this.toBeSaved);
                    //reintialize the temp oject
                    this.toBeSaved = new IDeliveryType();
                    this.closeModal();
                } else {
                    //Fail
                    alert("fail");
                }
            });
    }

    //edit Component

    //get target object before open modal
    prepareEdit(event: any) {
        //get target id
        this.toBeDeleted = event.target.id;
        //get the target object
        this.toBeSaved = this.components.filter(item => item.id == this.toBeDeleted)[0];
    }

    //edit method
    editComponent() {
        //call the edit service
        this.toBeSaved.id = this.toBeDeleted;
        this.lookupService.updateObject(this.toBeSaved, this.servicename).subscribe(
            (data: any) => {
                //check result
                if (data.messageResponseObj.code == "000") {
                    //Succed
                    //put the edited object to view
                    this.components.forEach(element => {
                        if (element.id == this.toBeSaved.id) {
                            element = this.toBeSaved;
                        }
                    });
                    //reintialize temp object
                    this.toBeSaved = new IDeliveryType();
                    this.closeModal();
                } else {
                    //Fail
                    alert("fail");
                }
            });
    }

    constructor(private lookupService: LookupService, private changeDetectorRef: ChangeDetectorRef, private router: ActivatedRoute) {

    }
}