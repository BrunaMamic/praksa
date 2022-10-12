import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from './data';

@Injectable()
export class Datas {
    constructor(private http: HttpClient) { }

    getData() {
        return this.http.get<any>('assets/data.json')
            .toPromise()
            .then(res => <Data[]>res.data)
            .then(data => { return data; });
    }
}