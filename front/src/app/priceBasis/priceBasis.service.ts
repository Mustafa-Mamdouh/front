import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/Observable';
import { PriceBasis } from './priceBasis.entity';
@Injectable()
export class PriceBasisService {
    path: string = "http://localhost:8082/api/v1/" + "PriceBasis/";

    constructor(private http: Http) { }
    getall() {
        return this.http.get(this.path+'all')
            .map((response: Response) => response.json());
    }
    add(priceBasis: PriceBasis) {
        return this.http.post(this.path+'add', priceBasis)
            .map((response: Response) => response.json());
    }
    update(priceBasis: PriceBasis) {
        return this.http.post(this.path+'update', priceBasis)
            .map((response: Response) => response.json());
    }
    delete(id: number) {
        return this.http.post(this.path+'delete/' + id, {})
            .map((response: Response) => response.json());
    }
}