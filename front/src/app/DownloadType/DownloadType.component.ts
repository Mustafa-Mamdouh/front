import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { DownloadTypeService } from './downloadType.service';
import { DownloadType } from './downloadType.entity';
@Component({
    selector: 'downloadType',
    templateUrl: './DownloadType.html'
})
export class DownloadTypeComponent {
    id: number;
    downloadTypeList: DownloadType[] = [];
    rowNumber: number;
    editedDownloadType: DownloadType = new DownloadType();
    newDownloadType: DownloadType = new DownloadType();
    downloadTypeToDelete: DownloadType = new DownloadType();
    ngOnInit(): void {
        this.downloadTypeService.getAllDownloadTypes().subscribe(
            (data: any) => {
                this.downloadTypeList = data;
            });
    }

    deleteDownloadType() {
        this.downloadTypeService.deleteDownloadType(this.downloadTypeToDelete.id).subscribe(data => {
            console.log(JSON.stringify(data));
            this.downloadTypeList.splice(this.rowNumber,1);
            this.changeDetectorRef.detectChanges();
        });
    }

    deleteDownloadTypeRow(rowIndex: number) {
        this.rowNumber = rowIndex;
        this.downloadTypeToDelete.name = this.downloadTypeList[rowIndex].name;
        this.downloadTypeToDelete.id = this.downloadTypeList[rowIndex].id;
    }
    updateDownloadType() {
        this.downloadTypeService.updateDownloadType(this.editedDownloadType).subscribe();
        this.downloadTypeList[this.rowNumber].name = this.editedDownloadType.name;
    }

    edit(DownloadTypeRow: number) {
        this.rowNumber = DownloadTypeRow;
        this.editedDownloadType.id = this.downloadTypeList[DownloadTypeRow].id;
        this.editedDownloadType.name = this.downloadTypeList[DownloadTypeRow].name;
    }
    addDownloadType() {
        this.downloadTypeService.addDownloadType(this.newDownloadType).subscribe(
            (data: any) => {
                this.downloadTypeList.push(data);
            }
        );
        this.newDownloadType.name = "";
    }

    constructor(private downloadTypeService: DownloadTypeService, private changeDetectorRef: ChangeDetectorRef, private router: Router) {
    }

}