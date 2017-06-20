import { Component, OnInit } from '@angular/core';
import { modifyReason } from '../modifyReason.service';


@Component({
    selector: 'app-modifyReason',
    templateUrl: './modifyReason.component.html',
    styleUrls: ['./modifyReason.component.css']
})
export class modifyReasonComponent implements OnInit {

    modifyReason: Array<any>;
    id: number;
    rcid: number;
    reason: string;
    isInsert: boolean;

    constructor(private modifyReasonService: modifyReason) { }

    ngOnInit() {
        this.modifyReasonService.getAllReasons().subscribe(
            (data: any) => {

                if (data.messageResponseObj.code == "000") {
                    //Succed
                    this.modifyReason = data.list;

                } else {
                    //Fail
                  
                }
            });

    }

    onChange(e: any

    ) {
        this.modifyReasonService.getReason(e).subscribe(
            (data: any) => {

                if (data.messageResponseObj.code == "000") {
                    this.id = data.modifyReason.id;
                    this.rcid = data.modifyReason.recid;
                    this.reason =  data.modifyReason.modifyreason;
                    //Succed.

                } else {
                    //Fail
                 
                }
            });



    }


    add() {


        // this.modifyReasonService.add(this.rcid,this.reason);
        this.id = undefined;
        this.rcid = undefined;
        this.reason = undefined;
        this.isInsert = true;
    }
    update() {

        this.isInsert = false;

    }
    delete() {

        this.modifyReasonService.delete(this.id).subscribe(
            (data: any) => {

               
                   

            });
        
         this.modifyReason = this.modifyReason.filter(item => item.id != this.id);
        // this.modifyReasonService.getAllReasons().subscribe(
        //     (data: any) => {

        //         if (data.messageResponseObj.code == "000") {
        //             //Succed
        //             this.modifyReason = data.list;

        //         } else {
        //             //Fail
        //             alert("fail");
        //         }
        //     });
        this.id = undefined;
        this.rcid = undefined;
        this.reason = undefined;


    }



    save() {

        if (this.isInsert==true) {
         
            this.modifyReasonService.add(this.rcid, this.reason).subscribe(
                (data: any) => {

                   
                        this.modifyReasonService.getAllReasons().subscribe(
            (data: any) => {

                if (data.messageResponseObj.code == "000") {
                    //Succed
                    this.modifyReason = data.list;

                } else {
                    //Fail
                   
                }
            });

                   
                });;
            this.id = undefined;
        this.rcid = undefined;
        this.reason = undefined;

        } else {
            this.modifyReasonService.update(this.id, this.rcid, this.reason).subscribe(
                (data: any) => {

                   
                        //Succed
                      
                        this.modifyReasonService.getAllReasons().subscribe(
            (data: any) => {

                if (data.messageResponseObj.code == "000") {
                    //Succed
                    this.modifyReason = data.list;

                } else {
                    //Fail
                    
                }
            });
this.id = undefined;
        this.rcid = undefined;
        this.reason = undefined;
                   
                });
                
        
        }


    }

}
