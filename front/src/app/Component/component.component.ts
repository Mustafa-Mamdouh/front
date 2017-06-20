import { Component, OnInit, ChangeDetectorRef, Input, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ComponentService } from './component.service';
import { IComponent } from '../Infrastructure/IComponent';
import { CategoryService } from '../category/category.service';
import { ICategory } from '../Infrastructure/ICatgorey';

import { NgForm, FormBuilder, Validators } from "@angular/forms";
declare var jQuery:any;

@Component({
    moduleId: module.id,
    selector: 'ComponentAll',
    templateUrl: './component.html',
    styleUrls: ['./Tabble.css']
})
export class ComponentComponent implements OnInit {
    components = new Array<IComponent>();
    wholecomp = new Array<IComponent>();

    viewcomponents: IComponent[] = [];
    toBeSaved = new IComponent();
    toBeDeleted: number;
    @ViewChild('closeBtn') closeBtn: ElementRef;
    @ViewChild('closeBtn2') closeBtn2: ElementRef;
    @ViewChild('closeBtn3') closeBtn3: ElementRef;
    pagination: number[] = [];
    //var total rows
    totalRows: number;
    pagnum: number = 0;

    catgories: ICategory[];

    //get Catgoreies
    getCatgories() {
        this.catgoreyService.getAllCategoriesNames().subscribe(data => {
            if (data.messageResponseObj.code == "000") {
                //success
                this.catgories = data.categories;
            }
            else {
                //fail
            }
        });
    }
    catIDfromCatgorey: number;
    ngOnInit(): void {
          jQuery(this.elem.nativeElement).ready(function () {
            jQuery('.footable').footable();
           jQuery('.footable2').footable();
        });
        this.router.params.subscribe(params => {
            if (params['id'] != null)
                this.catIDfromCatgorey = +params['id'];
        });

        this.getComponent();
        this.getCatgories();

    }
    //getComponents
    getComponent() {
        this.componentService.getAllComponents().subscribe(
            (data: any) => {
                if (data.messageResponseObj.code == "000") {
                    //Succed
                    this.wholecomp = data.components;
                    if (this.catIDfromCatgorey != 0)
                        this.components = this.wholecomp.filter(item => item.categoryId != null && item.categoryId.id == this.catIDfromCatgorey);
                    else
                        this.components = this.wholecomp;
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
        this.componentService.deleteComponent(this.toBeDeleted).subscribe(
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

        console.log('sdf');
        this.toBeSaved.categoryId = this.catgories.filter(item => item.id == e.target.value)[0];
        console.log(this.toBeSaved.categoryId);
    }

    //add Component
    addComponent() {
        //call add services        
        this.toBeSaved.categoryId = this.catgories.filter(item=>item.id==this.catIDfromCatgorey)[0];
        this.componentService.addComponent(this.toBeSaved).subscribe(
            (data: any) => {
                if (data.messageResponseObj.code == "000") {
                    //Succed
                    //add object to view
                    this.toBeSaved.id = data.componentID;
                    this.components.push(this.toBeSaved);
                    //reintialize the temp oject
                    this.toBeSaved = new IComponent();
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
        this.componentService.updateComponent(this.toBeSaved).subscribe(
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
                    this.toBeSaved = new IComponent();
                    this.closeModal();
                    this.components=this.components.filter(item=>item.categoryId.id==this.catIDfromCatgorey);
                } else {
                    //Fail
                    alert("fail");
                }
            });
    }

    constructor(private elem:ElementRef,private componentService: ComponentService, private catgoreyService: CategoryService, private changeDetectorRef: ChangeDetectorRef, private router: ActivatedRoute) {

    }
}
