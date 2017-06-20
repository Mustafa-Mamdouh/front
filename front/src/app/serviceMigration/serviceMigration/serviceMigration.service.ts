import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from "rxjs/Rx";
interface serviceMigratio {

         
            id: number,
            recid: number,
            serviceid: number,
            requestid:number,
            fromserviceid: number,
            toserviceid: number
        
        
}

@Injectable()
export class serviceMigration {
  options: RequestOptions;
  headers: Headers;

  constructor(private http: Http) {



  }

  getAllServicesMigration(): Observable<any> {

    return this.http.get('http://localhost:8082/serviceMigration/all').map((response: Response) => response.json());


  }

  getService(id: number): any {
    return this.http.get('http://localhost:8082/serviceMigration/allServices/' + id).map((response: Response) => response.json());



  }

  delete(id: number): any {

    this.headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.delete('http://localhost:8082/serviceMigration/delete/' + id).catch(this.handleError);;
    ;
  }


  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

  add(id: number, recid: number,fromserviceid:number,toserviceid:number,requestid:number, serviceid: number): any {
    
    let x1: serviceMigratio = {
            "id": id,
            "recid": recid,
            "serviceid": serviceid,
            "requestid": requestid,
            "fromserviceid": fromserviceid,
            "toserviceid":toserviceid
        }


   return this.http.post('http://localhost:8082/serviceMigration/add', x1, this.headers)._catch(this.handleError);
  }

  update(id: number, recid: number,fromserviceid:number,toserviceid:number,requestid:number, serviceid: number):any { 

  
     let x1: serviceMigratio = {
            "id": id,
            "recid": recid,
            "serviceid": serviceid,
            "requestid": requestid,
            "fromserviceid": fromserviceid,
            "toserviceid":toserviceid
        }


   return this.http.post('http://localhost:8082/serviceMigration/update', x1, this.headers)._catch(this.handleError);
 

}
}

//npm start

