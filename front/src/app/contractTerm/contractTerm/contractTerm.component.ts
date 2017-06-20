import { Component, OnInit } from '@angular/core';
import { ContractTerm } from '../contractTerm.service';

@Component({
    selector: 'app-contractTerm',
    templateUrl: './contractTerm.component.html',
    styleUrls: ['./contractTerm.component.css']
})
export class contractTermComponent implements OnInit {

    contractTerms: Array<any>;

    id: number;
    recid: number;
    contractterm: string;
    numberofmonths: number;
    description: string;
    iswebcontent: number;
    defaultcontract: number;
    isInsert: boolean;

    constructor(private service: ContractTerm) { }

    ngOnInit() {
        this.service.getAllContracts().subscribe(
            (data: any) => {

                if (data.messageResponseObj.code == "000") {
                    //Succed
                    this.contractTerms = data.list;

                } else {
                    //Fail
                  
                }
            });

    }

    onChange(e: any

    ) {
        this.service.getContract(e).subscribe(
            (data: any) => {

                if (data.messageResponseObj.code == "000") {
                    this.id = data.contractTerm.id;
                    this.recid = data.contractTerm.recid;
                    this.contractterm = data.contractTerm.contractterm;
                    this.description = data.contractTerm.description;
                    this.numberofmonths = data.contractTerm.numberofmonths;
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
        this.contractterm = undefined;
        this.description = undefined;
        this.numberofmonths = undefined;
        this.isInsert = true;
    }
    update() {

        this.isInsert = false;

    }


    delete() {

        this.service.delete(this.id).subscribe(
            (data: any) => {

               
            });
             this.contractTerms = this.contractTerms.filter(item => item.id != this.id);
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
        this.contractTerms = this.contractTerms.filter(item => item.id != this.id);
        this.id = undefined;
        this.recid = undefined;
        this.contractterm = undefined;
        this.description = undefined;
        this.numberofmonths = undefined;


    }



    save() {

        if (this.isInsert==true) {
            
            this.service.add(this.id,
                 this.recid,
        this.contractterm,this.numberofmonths,
        this.description 
         ).subscribe(
                (data: any) => {


                        //Succed
                       


                });;

                 this.service.getAllContracts().subscribe(
            (data: any) => {

                if (data.messageResponseObj.code == "000") {
                    //Succed
                    this.contractTerms = data.list;

                } else {
                    //Fail
                   
                }
            });

                   
               
           this.id = undefined;
        this.recid = undefined;
        this.contractterm = undefined;
        this.description = undefined;
        this.numberofmonths = undefined;



        } else  if(!this.isInsert) {
           
            this.service.update(this.id,
                 this.recid,
        this.contractterm,this.numberofmonths,
        this.description ).subscribe(
                (data: any) => {


                        //Succed
                      

this.service.getAllContracts().subscribe(
            (data: any) => {

                if (data.messageResponseObj.code == "000") {
                    //Succed
                    this.contractTerms = data.list;

                } else {
                    //Fail
                    // alert("fail");
                }
            });

                   
               
           this.id = undefined;
        this.recid = undefined;
        this.contractterm = undefined;
        this.description = undefined;
        this.numberofmonths = undefined;


                });
        }}}


//     }

// }
