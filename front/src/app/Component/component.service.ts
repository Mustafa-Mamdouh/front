import { Injectable } from '@angular/core';
import {Http , Headers,RequestOptions,Response} from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/Observable';
import { IComponent } from '../Infrastructure/IComponent';
interface idObject{
id:number;
}
@Injectable()
export class ComponentService {

    constructor(private http: Http) { }
    getAllComponents() {
        return this.http.get('http://localhost:8082/Component/all')
            .map((response: Response) => response.json());
    }
    addComponent(component: IComponent) {
        return this.http.post('http://localhost:8082/Component/add', component) 
        .map((response: Response) => response.json());
    }
    deleteComponent(id: number) {
        let header: Headers = new Headers();
        // header.append('Client','Y5hGBomcBeQ=');
        // header.append('UserLanguage','ar-EG');
        header.append('Content-Type', 'application/json');
        let option: RequestOptions = new RequestOptions({ headers: header });
        return this.http.post('http://localhost:8082/Component/delete', id,option)
        .map((response: Response) => response.json());
    }
    getOneComponent(id: number) {
        return this.http.post('http://localhost:8082/Component/selectOne', id)
            .map((response: Response) => response.json());
    }
    updateComponent(component: IComponent) {
        return this.http.post('http://localhost:8082/Component/update', component)
                .map((response: Response) => response.json());

    }
}

