import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/Observable';
import { Bandwidth } from './bandwidth.entity';
@Injectable()
export class BandwidthService {
        path:string="http://localhost:8082/api/v1/"+"Bandwidth/";

    constructor(private http: Http) { }
    getAll() {
        return this.http.get(this.path+'all')
            .map((response: Response) => response.json());
    }
    addBandwidth(bandwidth: Bandwidth) {
        return this.http.post(this.path+'add', bandwidth)
            .map((response:Response)=>response.json());
    }
    updateBandwidth(bandwidth: Bandwidth) {
        return this.http.post(this.path+'update', bandwidth)
            .map((response:Response)=>response.json());
    }
    deleteBandwidth(id:number) {
        return this.http.post(this.path+'delete/'+id, {})
            .map((response:Response)=>response.json());
    }



}