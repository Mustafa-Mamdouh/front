import { Injectable } from '@angular/core';
import {Http , Headers,RequestOptions,Response} from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/Observable';

import { Category } from './category.entity';
@Injectable()
export class CategoryService implements ExceptionInformation {

    constructor(private http: Http) { }
    getAllCategoriesNames() {
        return this.http.get('http://localhost:8082/category/allnames')
            .map((response: Response) => response.json());
    }
    getAllCategories() {
        return this.http.get('http://localhost:8082/category/all')
            .map((response: Response) => {
                let responseMessage = response.json();
               // console.log(responseMessage);
                if (parseInt(responseMessage['messageResponseObj'].code) == 0)
                    return responseMessage['categories'];
                else
                    throw new Error('error');
            });
    }


    addCategory(category: Category) {
        return this.http.post('http://localhost:8082/category/add', category).map(
            (response: Response) => {
                let responseMessage = response.json();
                if (parseInt(responseMessage['messageResponseObj'].code) == 0)
                    return responseMessage['category'];
                throw new Error('error');
            }

        );
    }
    deleteCategory(id: number) {
                let header: Headers = new Headers();
        // header.append('Client','Y5hGBomcBeQ=');
        // header.append('UserLanguage','ar-EG');
        header.append('Content-Type', 'application/json');
        let option: RequestOptions = new RequestOptions({ headers: header });

        return this.http.post('http://localhost:8082/category/delete',id,option)
        .map((response: Response) => response.json());
    }
    getOneCategory(id: number) {
        return this.http.post('http://localhost:8082/category/selectOne', id)
            .map((response: Response) => response.json());
    }
    updateCategory(category: Category) {
        return this.http.post('http://localhost:8082/category/update', category);
    }
}

