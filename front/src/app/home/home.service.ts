import { Injectable } from '@angular/core';
import { Http, Response, } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/Observable';
import { Info } from './info.entity'
import { AppSettings } from '../DomainConfig/AppSetting'

@Injectable()
export class HomeService {
    constructor(private http: Http)
    { }
    getInfo() {
    return    this.http.get(AppSettings.API_ENDPOINT+'home/info').map(
            (response: Response) => {
                let responseMessage = response.json();
                if (parseInt(responseMessage['messageResponseObj'].code) == 0)
                    return responseMessage['statsticsDto'];
                else
                    throw Error('error');
            }
        );
    }
}