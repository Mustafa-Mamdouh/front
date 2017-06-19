import { Injectable } from '@angular/core';
import {Http , Headers,RequestOptions,Response} from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/Observable';
import { IService } from '../Infrastructure/IService';

@Injectable()
export class ServiceService {
    path:string="http://localhost:8082/api/v1/"+"Service/";
    constructor(private http: Http) { }
    getAllServices() {
        return this.http.get(this.path+'getAll')
            .map((response: Response) => response.json());
    }
    addService(Service: IService) {
        return this.http.post(this.path+'add', Service) 
        .map((response: Response) => response.json());
    }
    deleteService(id: number) {
        let header: Headers = new Headers();
        header.append('Content-Type', 'application/json');
        let option: RequestOptions = new RequestOptions({ headers: header });
        return this.http.post(this.path+'delete', id,option)
        .map((response: Response) => response.json());
    }
    getOneService(id: number) {
        return this.http.post(this.path+'selectOne', id)
            .map((response: Response) => response.json());
    }
    updateService(Service: IService) {
        return this.http.post(this.path+'update', Service)
                .map((response: Response) => response.json());

    }
}

