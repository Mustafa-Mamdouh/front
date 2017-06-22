
// import { Injectable } from '@angular/core';
// import { Http, Response, } from '@angular/http';
// import { Order } from './Order.entity'
// import{OrderDto} from './orderdto.entity';
// import 'rxjs/Rx';
// import 'rxjs/Observable';
// import { Router } from '@angular/router';

// @Injectable()
// export class OrderService {
//     constructor(private http: Http,private router:Router) { }
//     addOrder(order: Order) {
//         return this.http.post('http://localhost:8082/order/add', order).map(
//             (response: Response) => {
//                 console.log("service ........."+response);
//                return response;
//             });
//     }
//     getAllOrders() {
//         console.log("getAllOrders");
//         return this.http.get('http://localhost:8082/order/all').map(
//             (response: Response) => {
//                 console.log(response);
//                 return response;
//             }

//         );
//     }

import { Injectable } from '@angular/core';
import { Http, Response, } from '@angular/http';
import { Order } from './Order.entity'
import { OrderDto } from './orderdto.entity';
import 'rxjs/Rx';
import 'rxjs/Observable';

@Injectable()
export class OrderService {
    path: string = "http://192.168.10.214:8082/api/v1/"+ "order/";

    constructor(private http: Http) { }
    addOrder(order: Order) {
        return this.http.post(this.path+'add', order).map((response: Response) => response.json());;
    }
    getAllOrders() {
        return this.http.get(this.path+'all').map(
            (response: Response) => {
               // console.log(response);
                let responseMessage = response.json();
                return responseMessage['orderDtos'];
                // let ordersDto:Array<OrderDto>=responseMessage['orderDtos'];
                // console.log(ordersDto);
                // // let orderDtos=;
                // let attributes: Map<string, Array<String>> = responseMessage['orderDtos'][0]['attributes'];
                // console.log(responseMessage['orderDtos'][0]);
                // // console.log();
                // for (let key in attributes) {
                //     console.log(key);
                //     console.log(attributes[key]);
                // }

            }

        );
    }

}
