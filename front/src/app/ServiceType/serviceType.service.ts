import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/Observable';
import { ServiceType } from './serviceType.entity'
import { AppSettings } from '../DomainConfig/AppSetting'

@Injectable()
export class ServiceTypeService {
    path: string = AppSettings.API_ENDPOINT+ "serviceType/";

    constructor(private http: Http) { }
    getall() {
        return this.http.get(this.path+'all')
            .map((response: Response) => response.json());
    }
    add(serviceType: ServiceType) {
        return this.http.post(this.path+'add', serviceType)
            .map((response: Response) => response.json());
    }
    update(serviceType: ServiceType) {
        return this.http.post(this.path+'update', serviceType)
            .map((response: Response) => response.json());
    }
    delete(id: number) {
        return this.http.post(this.path+'delete/' + id, {})
            .map((response: Response) => response.json());
    }

}