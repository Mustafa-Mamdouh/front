import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Bandwidth } from './bandwidth.entity';
import { BandwidthService } from './bandwidth.service';
import { NgForm } from "@angular/forms";
@Component({
    selector: 'Bandwidth-comp',
    templateUrl: './bandwidth.component.html'

})
export class BandwidthComponent implements OnInit {

    bandwidths = new Array<Bandwidth>();
    newBandwidth: Bandwidth = new Bandwidth();
    editBandwdith: Bandwidth = new Bandwidth();
    bandwidthRow: number;
    deletedBandwidth: Bandwidth = new Bandwidth();
    ngOnInit(): void {
        this.bandwidthService.getAll()
            .subscribe((data: any) => {
                console.log(data);
                this.bandwidths = data['bandwidths'];
            });
    }
    edit(rowIndex: number) {
        this.bandwidthRow = rowIndex;
        this.editBandwdith.id = this.bandwidths[rowIndex].id;
        this.editBandwdith.name = this.bandwidths[rowIndex].name;
        this.editBandwdith.value = this.bandwidths[rowIndex].value;
    }
    updateBandwidth() {
        this.bandwidthService.updateBandwidth(this.editBandwdith).subscribe(
            (data: any) => { }
        );
        this.bandwidths[this.bandwidthRow].name = this.editBandwdith.name;
        this.bandwidths[this.bandwidthRow].value = this.editBandwdith.value;
    }
    deleteBandwidthRow(rowIndex: number) {
        this.bandwidthRow = rowIndex;
        this.deletedBandwidth.id = this.bandwidths[rowIndex].id;
        this.deletedBandwidth.name = this.bandwidths[rowIndex].name;
    }
    deleteBandwidth() {
        this.bandwidthService.deleteBandwidth(this.deletedBandwidth.id).subscribe(data => {
            console.log(JSON.stringify(data));
            if (data.messageResponseObj.code == "000") {
                //sucess
                this.bandwidths.splice(this.bandwidthRow, 1);
                this.changeDetectorRef.detectChanges();
            }
            else {
                alert(fail);
            }
        });
    }
    addBandwidth(form: NgForm) {
        // console.log(form)
        // console.log(form.valid)
        // if (!form.valid)
        //     return;
        // console.log(form.valid)
        this.bandwidthService.addBandwidth(this.newBandwidth)
            .subscribe((data: any) => {
                console.log(data);
                let temp = data['bandwidth'];
                this.bandwidths.push(temp);
                this.newBandwidth = new Bandwidth();
                this.changeDetectorRef.detectChanges();
            })


    }
    constructor(private bandwidthService: BandwidthService,
        private changeDetectorRef: ChangeDetectorRef, private router: Router) { }
}
