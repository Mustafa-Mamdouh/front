import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/Observable';
import { SellingType } from './SellingType.entity';
@Injectable()
export class SellingTypeService implements ExceptionInformation {
    path: string = "http://localhost:8082/api/v1/" + "sellingType/";

    constructor(private http: Http) { }

    getAllSellingTypes() {
        return this.http.get(this.path+'getAll')
            .map((response: Response) => {
                let responseMessage = response.json();
                return responseMessage['sellingType'];
            });
    }

    addSellingType(sellingType: SellingType) {
        return this.http.post(this.path+'add', sellingType).map(
            (response: Response) => {
                let responseMessage = response.json();
                return responseMessage['sellingType'];
            }

        );
    }

    updateSellingType(sellingType: SellingType) {
        return this.http.post(this.path+'update', sellingType)
            .map((response: Response) => response.json());
    }

    deleteSellingType(id: number) {
        let header: Headers = new Headers();
        header.append('Content-Type', 'application/json');
        let option: RequestOptions = new RequestOptions({ headers: header });
        return this.http.delete(this.path+'deleteSellingType/'+id, option)
            .map((response: Response) => response.json());
    }

}