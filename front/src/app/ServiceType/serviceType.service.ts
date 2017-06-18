import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/Observable';
import { ServiceType } from './serviceType.entity'
@Injectable()
export class ServiceTypeService {

    constructor(private http: Http) { }
    getall() {
        return this.http.get('http://localhost:8082/serviceType/all')
            .map((response: Response) => response.json());
    }
    add(serviceType: ServiceType) {
        return this.http.post('http://localhost:8082/serviceType/add', serviceType)
            .map((response: Response) => response.json());
    }
    update(serviceType: ServiceType) {
        return this.http.post('http://localhost:8082/serviceType/update', serviceType)
            .map((response: Response) => response.json());
    }
    delete(id: number) {
        return this.http.post('http://localhost:8082/serviceType/delete/' + id, {})
            .map((response: Response) => response.json());
    }

}