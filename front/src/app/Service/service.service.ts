import { Injectable } from '@angular/core';
import {Http , Headers,RequestOptions,Response} from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/Observable';
import { IService } from '../Infrastructure/IService';

@Injectable()
export class ServiceService {

    constructor(private http: Http) { }
    getAllServices() {
        return this.http.get('http://localhost:8082/Service/getAll')
            .map((response: Response) => response.json());
    }
    addService(Service: IService) {
        return this.http.post('http://localhost:8082/Service/add', Service) 
        .map((response: Response) => response.json());
    }
    deleteService(id: number) {
        let header: Headers = new Headers();
        header.append('Content-Type', 'application/json');
        let option: RequestOptions = new RequestOptions({ headers: header });
        return this.http.post('http://localhost:8082/Service/delete', id,option)
        .map((response: Response) => response.json());
    }
    getOneService(id: number) {
        return this.http.post('http://localhost:8082/Service/selectOne', id)
            .map((response: Response) => response.json());
    }
    updateService(Service: IService) {
        return this.http.post('http://localhost:8082/Service/update', Service)
                .map((response: Response) => response.json());

    }
}

