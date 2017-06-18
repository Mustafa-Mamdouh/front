import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/Observable';
import { Bandwidth } from './bandwidth.entity';
@Injectable()
export class BandwidthService {
    constructor(private http: Http) { }
    getAll() {
        return this.http.get('http://localhost:8082/Bandwidth/all')
            .map((response: Response) => response.json());
    }
    addBandwidth(bandwidth: Bandwidth) {
        return this.http.post('http://localhost:8082/Bandwidth/add', bandwidth)
            .map((response:Response)=>response.json());
    }
    updateBandwidth(bandwidth: Bandwidth) {
        return this.http.post('http://localhost:8082/Bandwidth/update', bandwidth)
            .map((response:Response)=>response.json());
    }
    deleteBandwidth(id:number) {
        return this.http.post('http://localhost:8082/Bandwidth/delete/'+id, {})
            .map((response:Response)=>response.json());
    }



}