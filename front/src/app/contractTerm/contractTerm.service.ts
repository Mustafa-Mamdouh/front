import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { AppSettings } from '../DomainConfig/AppSetting'

import { Observable } from "rxjs/Rx";
interface contractterm {

            id: number,
            recid:number,
            contractterm: string,
            numberofmonths: number,
            description: string,
            iswebcontent: number,
            defaultcontract: number
        
}

@Injectable()
export class ContractTerm {
  options: RequestOptions;
  headers: Headers;
 path: string = AppSettings.API_ENDPOINT;
  constructor(private http: Http) {



  }

  getAllContracts(): Observable<any> {

    return this.http.get(this.path+'contracts/all').map((response: Response) => response.json());


  }

  getContract(id: number): any {
    return this.http.get(this.path+'contracts/allContracts/' + id).map((response: Response) => response.json());



  }

  delete(id: number): any {


    this.headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.delete(this.path+'contracts/delete/' + id).catch(this.handleError);;
    ;
  }


  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

  add(id: number, recid: number, contractterm: string,numberofmonth:number,desc:string): any {
 
    let x1: contractterm = {
     
            "id": null,
            "recid": recid,
            "contractterm": contractterm,
            "numberofmonths": numberofmonth,
            "description": desc,
            "iswebcontent": null,
            "defaultcontract": null
        }


   return this.http.post(this.path+'contracts/add', x1, this.headers)._catch(this.handleError);
  }


  update(id: number, recid: number, contractterm: string,numberofmonth:number,desc:string):any { 

  let x1: contractterm = {
     
            "id": id,
            "recid": recid,
            "contractterm": contractterm,
            "numberofmonths": numberofmonth,
            "description": desc,
            "iswebcontent": null,
            "defaultcontract": null
        

    }


   return this.http.post(this.path+'contracts/update', x1, this.headers)._catch(this.handleError);
 

}
}

//npm start

