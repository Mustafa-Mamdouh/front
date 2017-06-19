import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { SellingTypeService } from './SellingType.service';
import { SellingType } from './SellingType.entity';
@Component({
    selector: 'SellingTypeComponent',
    templateUrl: './SellingType.html'
})
export class SellingTypeComponent {
    id: number;
    sellingTypeList: SellingType[] = [];
    rowNumber: number;
    editedSellingType: SellingType = new SellingType();
    newSellingType: SellingType = new SellingType();
    SellingTypeToDelete: SellingType = new SellingType();
    ngOnInit(): void {
        this.sellingTypeService.getAllSellingTypes().subscribe(
            (data: any) => {
                this.sellingTypeList = data;
            });
    }

    deleteSellingType() {
        this.sellingTypeService.deleteSellingType(this.SellingTypeToDelete.id).subscribe(data => {
            console.log(JSON.stringify(data));
            this.sellingTypeList.splice(this.rowNumber, 1);
            this.changeDetectorRef.detectChanges();
        });
    }

    deleteSellingTypeRow(rowIndex: number) {
        this.rowNumber = rowIndex;
        this.SellingTypeToDelete.type = this.sellingTypeList[rowIndex].type;
        this.SellingTypeToDelete.hideInDropDown = this.sellingTypeList[rowIndex].hideInDropDown;
        this.SellingTypeToDelete.id = this.sellingTypeList[rowIndex].id;
    }
    updateSellingType() {
        this.sellingTypeService.updateSellingType(this.editedSellingType).subscribe();
        this.sellingTypeList[this.rowNumber].type = this.editedSellingType.type;
        this.sellingTypeList[this.rowNumber].hideInDropDown = this.editedSellingType.hideInDropDown;
    }

    edit(sellingTypeRow: number) {
        this.rowNumber = sellingTypeRow;
        this.editedSellingType.id = this.sellingTypeList[sellingTypeRow].id;
        this.editedSellingType.type = this.sellingTypeList[sellingTypeRow].type;
        this.editedSellingType.hideInDropDown = this.sellingTypeList[sellingTypeRow].hideInDropDown;
    }
    addSellingType() {
        this.newSellingType.hideInDropDown = this.newSellingType.hideInDropDown + "" == "true" ? 1 : 0;
        this.sellingTypeService.addSellingType(this.newSellingType).subscribe(
            (data: any) => {
                this.sellingTypeList.push(data);
            }
        );
        this.newSellingType.type = "";
        this.newSellingType.hideInDropDown = 0;
    }

    constructor(private sellingTypeService: SellingTypeService, private changeDetectorRef: ChangeDetectorRef, private router: Router) {
    }

}