import { Component, OnInit, ChangeDetectorRef, Input, ViewChild, ElementRef } from '@angular/core';
import { NgForm, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router'
import { ServiceService } from './service.service';
import { IService } from '../Infrastructure/IService';
import { ICategory } from '../Infrastructure/ICatgorey';
import { IComponent } from '../Infrastructure/IComponent';
import { IAttributeValue } from '../Infrastructure/IAttributeValue';
import { IAttribute } from '../Infrastructure/IAttribute';

import { CategoryService } from '../category/category.service';
import { ComponentService } from '../Component/component.service';



@Component({
    moduleId: module.id,
    selector: 'ServiceAll',
    templateUrl: './service.html',
})
export class ServiceComponent implements OnInit {
    toBeSaved = new IService();
    candidatecomp: IComponent[];
    candycomp = new IComponent();
    serviceComponetList = new Array<IComponent>();
    attributeEdit = new IAttribute();
    attributeValueEdit = new Array<IAttributeValue>();
    serviceAttributes = new Array<IAttribute>();
    serviceAttributeValues = new Array<IAttributeValue>();
    services = new Array<IService>();
    servicetobechanged = new IService();
    editIndex: number;
    isView: boolean;


    //Modals
    @ViewChild('CompModal') compModal: ElementRef;
    @ViewChild('CompModal2') compModal2: ElementRef;

    //
    setViewBoolean() {
        this.prepareEditService();
        this.isView = false;
    }
    //prepare Selected Service
    setSelectedService(event: any) {
        this.editIndex = event.target.value;
        this.servicetobechanged = this.services[this.editIndex];
    }
    //
    addBtnService() {
        this.isView = true;
        this.toBeSaved = new IService();
        this.serviceComponetList = new Array<IComponent>();
        this.serviceAttributes = new Array<IAttribute>();
    }
    //
    prepareEditService() {
        this.isView = true;
        if (this.editIndex != -1) {
            this.toBeSaved = this.services[this.editIndex];
            this.serviceComponetList = this.toBeSaved.componentCollection;
            this.serviceAttributes = this.toBeSaved.attributeCollection;
        }
        else {
            alert("Choose Service");
        }
    }
    //
    deleteService() {
        if (this.editIndex != -1)
            this.serviceService.deleteService(this.servicetobechanged.id).subscribe(data => {
                console.log(data);

                if (data.messageResponseObj.code == "000") {
                    //Succed
                    this.services.splice(this.editIndex, 1);
                    this.servicetobechanged = new IService();
                    this.editIndex = -1;
                } else {
                    //Fail
                    alert("fail");
                }
            });
        else {
            alert("Choose Service");
        }

    }
    getServices() {
        this.serviceService.getAllServices().subscribe(data => {
            if (data.messageResponseObj.code == "000") {
                //Succed
                this.services = data.serviceDtos;
            } else {
                //Fail
                alert("fail");
            }

        });
    }
    addAttributeValue() {
        this.attributeValueEdit.push(new IAttributeValue());

    }

    addAttributeToService() {
        if (this.attributeEdit.name) {
            this.attributeEdit.attributeValueListCollection = this.attributeValueEdit;
            this.attributeEdit.type = this.attributeValueEdit.length > 1 ? "List" : "Single";
            this.attributeValueEdit = new Array<IAttributeValue>();
            this.serviceAttributes.push(this.attributeEdit);
            this.attributeEdit = new IAttribute();
        }
        this.compModal2.nativeElement.click();
    }

    removeAttribute(event: any) {
        //event.target.id
        this.attributeValueEdit.splice(event.target.id, 1);
    }

    ngOnInit(): void {
        this.editIndex = -1;

        this.getServices();
        this.getCatgories();
        //get all components
        this.componentService.getAllComponents().subscribe(
            (data: any) => {

                if (data.messageResponseObj.code == "000") {
                    //Succed
                    this.components = data.components;
                } else {
                    //Fail
                    alert("fail");
                }
            });

    }

    addService() {
        //Prepare Service
        this.toBeSaved.attributeCollection = this.serviceAttributes;
        this.toBeSaved.componentCollection = this.serviceComponetList;
        //call add services
        //console.log(JSON.stringify(this.toBeSaved));
        this.serviceService.addService(this.toBeSaved).subscribe();
        this.serviceComponetList = new Array<IComponent>();
        this.serviceAttributes = new Array<IAttribute>();
        this.toBeSaved = new IService();
    }
    components: IComponent[];
    catgories: ICategory[];
    //get Catgoreies
    getCatgories() {
        this.catgoreyService.getAllCategoriesNames().subscribe(data => {
            if (data.messageResponseObj.code == "000") {
                //success
                this.catgories = data.categories;
                console.log(this.catgories);
            }
            else {
                //fail

            }
            console.log(data);

        });
    }
    setCatgories() {

    }
    //onchange select of catgorey
    onChange(id: any) {
        if (id != "Pick One") {
            this.candidatecomp = this.components.filter(item => item.categoryId != null && item.categoryId.id == id);
            this.candycomp = this.candidatecomp[0];
        }
        else
            this.candidatecomp = new Array<IComponent>();
        this.candycomp = new IComponent();
    }
    //on change select component
    onChangeSelectComponent(compnet: any) {
        if (compnet != "Pick One") {
            this.candycomp = this.components.filter(item => item.id == compnet)[0];
        }
        else {
            this.candycomp = new IComponent();

        }
    }

    //addComponent To service
    addComponentToService() {
        if (this.candycomp.id != null) {
            this.serviceComponetList.push(this.candycomp);
            this.candycomp = new IComponent();
        }
        this.compModal.nativeElement.click();
    }

    //remove componet from service
    removeFromService(e: any) {
        this.serviceComponetList = this.serviceComponetList.filter(item => item.id != e.target.id);
    }

    //remove attr from service
    removeAttrFromService(event: any) {
        this.serviceAttributes.splice(event.target.id, 1);
    }

    constructor(private serviceService: ServiceService, private componentService: ComponentService, private catgoreyService: CategoryService, private changeDetectorRef: ChangeDetectorRef, private router: Router) {

    }
}