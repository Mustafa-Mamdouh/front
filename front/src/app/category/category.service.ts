import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/Observable';
import { AppSettings } from '../DomainConfig/AppSetting'


import { Category } from './category.entity';
@Injectable()
export class CategoryService implements ExceptionInformation {
    path: string = AppSettings.API_ENDPOINT + "category/";

    constructor(private http: Http) {
    }
    getAllCategoriesNames() {
        return this.http.get(this.path + 'allnames')
            .map((response: Response) => response.json());
    }
    getAllCategories() {
        return this.http.get(this.path + 'all')
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
        return this.http.post(this.path + 'add', category).map(
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

        return this.http.post(this.path + 'delete', id, option)
            .map((response: Response) => response.json());
    }
    getOneCategory(id: number) {
        return this.http.post(this.path + 'selectOne', id)
            .map((response: Response) => response.json());
    }
    updateCategory(category: Category) {
        return this.http.post(this.path + 'update', category);
    }
}

