import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { AppSettings } from '../DomainConfig/AppSetting'

import { Observable } from "rxjs/Rx";
interface modifiedReason {
id:number;
  recid: number;
  modifyreason: string;
}

@Injectable()
export class modifyReason {
  options: RequestOptions;
  headers: Headers;
   path: string = AppSettings.API_ENDPOINT;

  constructor(private http: Http) {



  }

  getAllReasons(): Observable<any> {

    return this.http.get(this.path+'reason/all').map((response: Response) => response.json());


  }

  getReason(id: number): any {
    return this.http.get(this.path+'reason/allModifyReason/' + id).map((response: Response) => response.json());



  }

  delete(id: number): any {

   
    this.headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.delete(this.path+'reason/delete/' + id).catch(this.handleError);;
    ;
  }


  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

  add(recid: number, reason: string): any {
 
    let x1: modifiedReason = {
      "id":null,
      "recid": recid,
      "modifyreason": reason

    }


   return this.http.post(this.path+'reason/add', x1, this.headers)._catch(this.handleError);
  }


  update(id: number, recid: number, reason: string):any { 

  let x1: modifiedReason = {
     "id": id,
      "recid": recid,
      "modifyreason": reason

    }


   return this.http.post(this.path+'reason/update', x1, this.headers)._catch(this.handleError);
 

  }
}

//npm start

