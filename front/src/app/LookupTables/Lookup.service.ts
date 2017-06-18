import { Injectable } from '@angular/core';
import {Http , Headers,RequestOptions,Response} from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/Observable';
import { IComponent } from '../Infrastructure/IComponent';
interface idObject{
id:number;
}
@Injectable()
export class LookupService {

    constructor(private http: Http) { }
    getAllObjects(Service:string) {
        return this.http.get('http://localhost:8082/'+Service+'/all')
            .map((response: Response) => response.json());
    }
    addObject(o:any,Service:string) {
        return this.http.post('http://localhost:8082/'+Service+'/add', o) 
        .map((response: Response) => response.json());
    }
    deleteObject(id: number,Service:string) {
        let header: Headers = new Headers();
        // header.append('Client','Y5hGBomcBeQ=');
        // header.append('UserLanguage','ar-EG');
        header.append('Content-Type', 'application/json');
        let option: RequestOptions = new RequestOptions({ headers: header });
        return this.http.post('http://localhost:8082/'+Service+'/delete', id,option)
        .map((response: Response) => response.json());
    }
   
    updateObject(o: any,Service:string) {
        return this.http.post('http://localhost:8082/'+Service+'/update', o)
                .map((response: Response) => response.json());

    }
}

