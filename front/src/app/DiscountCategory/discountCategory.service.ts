import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/Observable';
import { DiscountCategory } from './discountCategory.entity'
@Injectable()
export class DiscountCategoryService {
    constructor(private http: Http) { }
    getAll() {
        return this.http.get('http://localhost:8082/DiscountCategory/all')
            .map((response: Response) => response.json());
    }
    add(discountCategory: DiscountCategory) {
        return this.http.post('http://localhost:8082/DiscountCategory/add', discountCategory)
            .map((response: Response) => response.json());
    }
    update(discountCategory: DiscountCategory) {
        return this.http.post('http://localhost:8082/DiscountCategory/update', discountCategory)
            .map((response: Response) => response.json());
    }
    delete(id: number) {
        return this.http.post('http://localhost:8082/DiscountCategory/delete/' + id, {})
            .map((response: Response) => response.json());
    }

}