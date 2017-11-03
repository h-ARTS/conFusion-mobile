import { Injectable } from '@angular/core';
import { Leader } from '../../shared/leader';
import { Observable } from 'rxjs/Observable';
import { baseURL } from './../../shared/baseurl';
import { ProcessHttpmsgProvider } from './../process-httpmsg/process-httpmsg';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

/*
  Generated class for the LeaderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LeaderProvider {

  constructor(public http: Http,
              private processHTTPMsgProvider: ProcessHttpmsgProvider) { }

  getLeaders(): Observable<Leader[]> {
    return this.http.get(baseURL + 'leaders')
                    .map(res => this.processHTTPMsgProvider.extractData(res))
                    .catch(error => this.processHTTPMsgProvider.handleError(error));
  }

  getLeader(id: number): Observable<Leader> {
    return this.http.get(baseURL + 'leaders/' + id)
                    .map(res => this.processHTTPMsgProvider.extractData(res))
                    .catch(error => this.processHTTPMsgProvider.handleError(error));
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http.get(baseURL + 'leaders?featured=true')
                    .map(res => this.processHTTPMsgProvider.extractData(res)[0])
                    .catch(error => this.processHTTPMsgProvider.handleError(error));
  }

}
