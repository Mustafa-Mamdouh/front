import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AppSettings } from '../DomainConfig/AppSetting'

import 'rxjs/Rx';
import 'rxjs/Observable';

import { DownloadType } from './downloadType.entity';
@Injectable()
export class DownloadTypeService implements ExceptionInformation {
    path: string =AppSettings.API_ENDPOINT+ "DownloadType/";

    constructor(private http: Http) { }

    getAllDownloadTypes() {
        return this.http.get(this.path+'getAll')
            .map((response: Response) => {
                let responseMessage = response.json();
                return responseMessage['downloadTypes'];
            });
    }

    addDownloadType(downloadType: DownloadType) {
        return this.http.post(this.path+'addDownloadType', downloadType).map(
            (response: Response) => {
                let responseMessage = response.json();
                return responseMessage['downloadType'];
            }

        );
    }

    updateDownloadType(downloadType: DownloadType) {
        return this.http.post(this.path+'update', downloadType)
            .map((response: Response) => response.json());
    }

    deleteDownloadType(id: number) {
        let header: Headers = new Headers();
        header.append('Content-Type', 'application/json');
        let option: RequestOptions = new RequestOptions({ headers: header });
        return this.http.delete(this.path+'delete/'+id, option)
            .map((response: Response) => response.json());
    }

}