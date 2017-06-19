import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { CancelationReasonService } from './CancelationReason.service';
import { CancelationReason } from './CancelationReason.entity';
@Component({
    selector: 'Cancellation',
    templateUrl: './Cancellation.html'
})
export class CancellationReasonComponent {
    id: number;
    cancelationReasonList: CancelationReason[] = [];
    rowNumber: number;
    editedCancelationReason: CancelationReason = new CancelationReason();
    newCancelationReason: CancelationReason = new CancelationReason();
    cancelationReasonToDelete: CancelationReason = new CancelationReason();
    ngOnInit(): void {
        this.cancelationReasonService.getAllCancelationReasons().subscribe(
            (data: any) => {
                this.cancelationReasonList = data;
            });
    }

    deleteCancelationReason() {
        this.cancelationReasonService.deleteCancelationReason(this.cancelationReasonToDelete.id).subscribe(data => {
            console.log(JSON.stringify(data));
            this.cancelationReasonList.splice(this.rowNumber, 1);
            this.changeDetectorRef.detectChanges();
        });
    }

    deleteCancelationReasonRow(rowIndex: number) {
        this.rowNumber = rowIndex;
        this.cancelationReasonToDelete.cancelreason = this.cancelationReasonList[rowIndex].cancelreason;
        this.cancelationReasonToDelete.id = this.cancelationReasonList[rowIndex].id;
    }
    updateDownloadType() {
        this.cancelationReasonService.updateCancelationReason(this.editedCancelationReason).subscribe();
        this.cancelationReasonList[this.rowNumber].cancelreason = this.editedCancelationReason.cancelreason;
        this.cancelationReasonList[this.rowNumber].iscustomerrequest = this.editedCancelationReason.iscustomerrequest;
    }

    edit(CancellationReasonRow: number) {
        this.rowNumber = CancellationReasonRow;
        this.editedCancelationReason.id = this.cancelationReasonList[CancellationReasonRow].id;
        this.editedCancelationReason.cancelreason = this.cancelationReasonList[CancellationReasonRow].cancelreason;
        this.editedCancelationReason.iscustomerrequest = this.cancelationReasonList[CancellationReasonRow].iscustomerrequest;
    }
    addCancellationReason() {
        console.log(this.newCancelationReason.iscustomerrequest);
        this.newCancelationReason.iscustomerrequest = this.newCancelationReason.iscustomerrequest + "" == "true" ? 1 : 0;
        console.log(this.newCancelationReason.iscustomerrequest);
        this.cancelationReasonService.addCancelationReason(this.newCancelationReason).subscribe(
            (data: any) => {
                this.cancelationReasonList.push(data);
            }
        );
        this.newCancelationReason.cancelreason = "";
        this.newCancelationReason.iscustomerrequest = 0;
    }

    constructor(private cancelationReasonService: CancelationReasonService, private changeDetectorRef: ChangeDetectorRef, private router: Router) {
    }

}