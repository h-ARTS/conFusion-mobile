import { Injectable } from '@angular/core';
import { Dish } from '../../shared/dish';
import { Observable } from 'rxjs/Observable';
import { baseURL } from './../../shared/baseurl';
import { ProcessHttpmsgProvider } from './../process-httpmsg/process-httpmsg';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

/*
  Generated class for the DishProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DishProvider {

  constructor(public http: Http,
              private processHTTPMsgProvider: ProcessHttpmsgProvider) { }

  getDishes(): Observable<Dish[]> {
    return this.http.get(baseURL + 'dishes')
                    .map(res => this.processHTTPMsgProvider.extractData(res))
                    .catch(error => this.processHTTPMsgProvider.handleError(error));
  }

  getDish(id: number): Observable<Dish> {
    return this.http.get(baseURL + 'dishes/' + id)
                    .map(res => this.processHTTPMsgProvider.extractData(res))
                    .catch(error => this.processHTTPMsgProvider.handleError(error));
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get(baseURL + 'dishes?featured=true')
                    .map(res => this.processHTTPMsgProvider.extractData(res)[0])
                    .catch(error => this.processHTTPMsgProvider.handleError(error));
  }
  
}
