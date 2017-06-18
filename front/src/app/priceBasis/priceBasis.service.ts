import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/Observable';
import { PriceBasis } from './priceBasis.entity';
@Injectable()
export class PriceBasisService {

    constructor(private http: Http) { }
    getall() {
        return this.http.get('http://localhost:8082/PriceBasis/all')
            .map((response: Response) => response.json());
    }
    add(priceBasis: PriceBasis) {
        return this.http.post('http://localhost:8082/PriceBasis/add', priceBasis)
            .map((response: Response) => response.json());
    }
    update(priceBasis: PriceBasis) {
        return this.http.post('http://localhost:8082/PriceBasis/update', priceBasis)
            .map((response: Response) => response.json());
    }
    delete(id:number) {
        return this.http.post('http://localhost:8082/PriceBasis/delete/'+id, {})
            .map((response: Response) => response.json());
    }
}