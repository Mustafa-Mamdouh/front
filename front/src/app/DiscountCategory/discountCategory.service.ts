import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AppSettings } from '../DomainConfig/AppSetting'

import 'rxjs/Rx';
import 'rxjs/Observable';
import { DiscountCategory } from './discountCategory.entity'
@Injectable()
export class DiscountCategoryService {
    path: string = AppSettings.API_ENDPOINT + "DiscountCategory/";
    constructor(private http: Http) { }
    getAll() {
        return this.http.get(this.path+'all')
            .map((response: Response) => response.json());
    }
    add(discountCategory: DiscountCategory) {
        return this.http.post(this.path+'add', discountCategory)
            .map((response: Response) => response.json());
    }
    update(discountCategory: DiscountCategory) {
        return this.http.post(this.path+'update', discountCategory)
            .map((response: Response) => response.json());
    }
    delete(id: number) {
        return this.http.post(this.path+'delete/' + id, {})
            .map((response: Response) => response.json());
    }

}