import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { DiscountCategory } from './discountCategory.entity'
import { DiscountCategoryService } from './discountCategory.service'
@Component({
    selector: 'discountCategory-comp',
    templateUrl: './discountCategory.component.html'

})
export class DiscountCategoryComponent implements OnInit {
    discountCatgeories = new Array<DiscountCategory>();
    newDiscountCategory: DiscountCategory = new DiscountCategory();
    editDiscountCategroy: DiscountCategory = new DiscountCategory();
    discountCategoryRow: number;
    deletedDiscountCategory: DiscountCategory = new DiscountCategory();
    addDiscountCategory() {
        this.discountCategoryService.add(this.newDiscountCategory).subscribe(
            (data: any) => {
                console.log(data);
                let temp = data['discountCategory'];
                this.discountCatgeories.push(temp);
                this.newDiscountCategory = new DiscountCategory();
                this.changeDetectorRef.detectChanges();
            });
    }
    deleteBandwidthRow(rowIndex: number) {
        this.discountCategoryRow = rowIndex;
        this.deletedDiscountCategory.id = this.discountCatgeories[rowIndex].id;
        this.deletedDiscountCategory.name = this.discountCatgeories[rowIndex].name;
    }
    deleteDiscountCategory() {
        this.discountCategoryService.delete(this.deletedDiscountCategory.id).subscribe(data => {
            console.log(JSON.stringify(data));
            if (data.messageResponseObj.code == "000") {
                //sucess
                this.discountCatgeories.splice(this.discountCategoryRow, 1);
                this.changeDetectorRef.detectChanges();
            }
            else {
                alert(fail);
            }
        });
    }
    edit(rowIndex: number) {
        this.discountCategoryRow = rowIndex;
        this.editDiscountCategroy.id = this.discountCatgeories[rowIndex].id;
        this.editDiscountCategroy.name = this.discountCatgeories[rowIndex].name;

    }
    updateDiscountCategory() {
        this.discountCategoryService.update(this.editDiscountCategroy).subscribe(
            (data: any) => {
                this.discountCatgeories[this.discountCategoryRow].name = this.editDiscountCategroy.name;
            }
        );
    }
    ngOnInit(): void {
        this.discountCategoryService.getAll().subscribe(
            (data: any) => {
                console.log(data);
                this.discountCatgeories = data['discountCategories'];
            });
    }

    constructor(private discountCategoryService: DiscountCategoryService,
        private changeDetectorRef: ChangeDetectorRef, private router: Router) { }
}