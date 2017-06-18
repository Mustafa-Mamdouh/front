import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";
import { PriceBasis } from './priceBasis.entity';
import { PriceBasisService } from './priceBasis.service';
@Component({
    selector: 'PriceBasis-comp',
    templateUrl: './priceBasis.component.html'

})
export class PriceBasisComponent implements OnInit {
    priceBasises = new Array<PriceBasis>();
    newPriceBasis: PriceBasis = new PriceBasis();
    editPriceBasis: PriceBasis = new PriceBasis();
    deletedPriceBasis: PriceBasis = new PriceBasis;
    priceBasisRow: number;
    ngOnInit(): void {
        this.priceBasisService.getall().subscribe(
            (data) => {
                this.priceBasises = data['priceBasis'];
            }
        );
    }
    addPriceBasis() {
        this.priceBasisService.add(this.newPriceBasis).subscribe(
            (data: any) => {
                console.log(data);
                let temp = data['priceBasis'];
                this.priceBasises.push(temp);
                this.newPriceBasis = new PriceBasis();
                this.changeDetectorRef.detectChanges();
            });
    }
    deletePriceBasisRow(rowIndex: number) {
        this.priceBasisRow = rowIndex;
        this.deletedPriceBasis.id = this.priceBasises[rowIndex].id;
        this.deletedPriceBasis.name = this.priceBasises[rowIndex].name;
    }
    deletePriceBasis() {
        this.priceBasisService.delete(this.deletedPriceBasis.id).subscribe(
            (data: any) => {
                console.log(JSON.stringify(data));
                if (data.messageResponseObj.code == "000") {
                    //sucess
                    this.priceBasises.splice(this.priceBasisRow, 1);
                    this.changeDetectorRef.detectChanges();
                }
                else {
                    alert(fail);
                }
            });
    }
    edit(rowIndex: number) {
        this.priceBasisRow = rowIndex;
        this.editPriceBasis.id = this.priceBasises[rowIndex].id;
        this.editPriceBasis.name = this.priceBasises[rowIndex].name;
        this.editPriceBasis.describtion = this.priceBasises[rowIndex].describtion;
        this.editPriceBasis.numberOfMonths = this.priceBasises[rowIndex].numberOfMonths;
        this.editPriceBasis.freeDaysOnce = this.priceBasises[rowIndex].freeDaysOnce;
        this.editPriceBasis.freeDaysServiceBill = this.priceBasises[rowIndex].freeDaysServiceBill;
    }
    update() {
        this.priceBasisService.update(this.editPriceBasis).subscribe(
            (data: any) => {
                this.priceBasises[this.priceBasisRow].name = this.editPriceBasis.name;
                this.priceBasises[this.priceBasisRow].freeDaysOnce = this.editPriceBasis.freeDaysOnce;
                this.priceBasises[this.priceBasisRow].freeDaysServiceBill = this.editPriceBasis.freeDaysServiceBill;
                this.priceBasises[this.priceBasisRow].numberOfMonths = this.editPriceBasis.numberOfMonths;
            }
        )

    }
    updatePriceBasis() {
        this.priceBasisService.update(this.editPriceBasis).subscribe(
            (data: any) => {
                this.priceBasises[this.priceBasisRow].name = this.editPriceBasis.name;
                this.priceBasises[this.priceBasisRow].numberOfMonths = this.editPriceBasis.numberOfMonths;
                this.priceBasises[this.priceBasisRow].describtion = this.editPriceBasis.describtion;
                this.priceBasises[this.priceBasisRow].freeDaysOnce = this.editPriceBasis.freeDaysOnce;
                this.priceBasises[this.priceBasisRow].freeDaysServiceBill = this.editPriceBasis.freeDaysServiceBill;
            }
        );
    }

    constructor(private priceBasisService: PriceBasisService,
        private changeDetectorRef: ChangeDetectorRef, private router: Router) { }
}
