import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/Observable';

import { CancelationReason } from './CancelationReason.entity';
@Injectable()
export class CancelationReasonService implements ExceptionInformation {
    path: string = "http://localhost:8082/api/v1/" + "CancelationReason/";
    constructor(private http: Http) { }

    getAllCancelationReasons() {
        return this.http.get(this.path+'getAllCancelationReasons')
            .map((response: Response) => {
                let responseMessage = response.json();
                return responseMessage['cancelationReason'];
            });
    }

    addCancelationReason(cancelationReason: CancelationReason) {
        return this.http.post(this.path+'add', cancelationReason).map(
            (response: Response) => {
                let responseMessage = response.json();
                return responseMessage['cancelationReason'];
            }

        );
    }

    updateCancelationReason(cancelationReason: CancelationReason) {
        return this.http.post(this.path+'update', cancelationReason)
            .map((response: Response) => response.json());
    }

    deleteCancelationReason(id: number) {
        let header: Headers = new Headers();
        header.append('Content-Type', 'application/json');
        let option: RequestOptions = new RequestOptions({ headers: header });
        return this.http.delete(this.path+'deleteCancelationReason/' + id, option)
            .map((response: Response) => response.json());
    }

}