import { Component, OnInit } from '@angular/core';
import { serviceMigration } from '../serviceMigration.service';

@Component({
    selector: 'app-serviceMigration',
    templateUrl: './serviceMigration.component.html',
    styleUrls: ['./serviceMigration.component.css']
})
export class serviceMigrationComponent implements OnInit {

    ServicesMigration: Array<any>;

    id: number;
    recid: number;
    serviceid: number;
    requestid: number;
    fromserviceid: number;
    toserviceid: number;

    isInsert: boolean;

    constructor(private service: serviceMigration) { }

    ngOnInit() {
        this.service.getAllServicesMigration().subscribe(
            (data: any) => {

                if (data.messageResponseObj.code == "000") {
                    //Succed
                    this.ServicesMigration = data.list;

                } else {
                    //Fail
                   
                }
            });

    }

    onChange(e: any

    ) {
        this.service.getService(e).subscribe(
            (data: any) => {

                if (data.messageResponseObj.code == "000") {
                    this.id = data.serviceMigration.id;
                    this.recid = data.serviceMigration.recid;
                    this.fromserviceid = data.serviceMigration.fromserviceid;
                    this.toserviceid = data.serviceMigration.toserviceid;
                    this.requestid = data.serviceMigration.requestid;
                    this.serviceid = data.serviceMigration.serviceid;
                    //Succed.

                } else {
                    //Fail
               
                }
            });

    }


    add() {


        // this.modifyReasonService.add(this.rcid,this.reason);
        this.id = undefined;
        this.recid = undefined;
        this.fromserviceid = undefined;
        this.toserviceid = undefined;
        this.requestid = undefined;
        this.serviceid = undefined;
        this.isInsert = true;
    }
    update() {

        this.isInsert = false;

    }


    delete() {

        this.service.delete(this.id).subscribe(
            );
        
        this.ServicesMigration = this.ServicesMigration.filter(item => item.id != this.id);
        // this.service.getAllContracts().subscribe(
        //     (data: any) => {

        //         if (data.messageResponseObj.code == "000") {
        //             //Succed
        //             this.contractTerms = data.list;

        //         } else {
        //             //Fail
        //             alert("fail");
        //         }
        //     });

        this.id = undefined;
        this.recid = undefined;
        this.fromserviceid = undefined;
        this.toserviceid = undefined;
        this.requestid = undefined;
        this.serviceid = undefined;


    }



    save() {

        if (this.isInsert == true) {
            
            this.service.add(this.id,
                this.recid,
                this.fromserviceid,
                this.toserviceid,
                this.requestid,
                this.serviceid

            ).subscribe(
                (data: any) => {
  this.service.getAllServicesMigration().subscribe(
            (data: any) => {

                if (data.messageResponseObj.code == "000") {
                    //Succed
                    this.ServicesMigration = data.list;

                } else {
                    //Fail
                  
                }
            });


                });;


                   
          this.id = undefined;
        this.recid = undefined;
        this.fromserviceid = undefined;
        this.toserviceid = undefined;
        this.requestid = undefined;
        this.serviceid = undefined;

        } else if (!this.isInsert) {
          

            this.service.update(this.id,
                this.recid,
                this.fromserviceid,
                this.toserviceid,
                this.requestid,
                this.serviceid).subscribe(
                (data: any) => {

  this.service.getAllServicesMigration().subscribe(
            (data: any) => {

                if (data.messageResponseObj.code == "000") {
                    //Succed
                    this.ServicesMigration = data.list;

                } else {
                    //Fail
                   
                }
            });


                });
              

                 this.id = undefined;
        this.recid = undefined;
        this.fromserviceid = undefined;
        this.toserviceid = undefined;
        this.requestid = undefined;
        this.serviceid = undefined;
        }
    }
}


//     }

// }
