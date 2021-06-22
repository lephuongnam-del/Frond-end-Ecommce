import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { JSUTILS } from '../utils/main-utils';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private msg: ToastrService) {
  }

  public sendToServer(method: string, api: string, bd: string, hd: any, param: any) {
    let url = environment.endPoint + api;
    let body = bd || {};
    let header = hd || { 'Content-Type': 'application/json' };
    let ret: Observable<any>;

    if (param) Object.keys(param).forEach(element => {
      if (param[element] === '' || param[element] == 'undefined' || param[element] == null) {
        delete param[element];
      }
    });

    const params = new HttpParams({ fromObject: param });

    switch (method) {
      case 'GET':
        ret = this.http.get(url, {
          headers: header,
          observe: 'body',
          params: params
        })
        break;
      case 'POST':
        ret = this.http.post(url, body, {
          headers: header,
          observe: 'body',
          params: params
        })
        break;
      case 'PATCH':
        ret = this.http.patch(url, body, {
          headers: header,
          observe: 'body',
          params: params
        })
        break;
      case 'PUT':
        ret = this.http.put(url, body, {
          headers: header,
          observe: 'body',
          params: params
        })
        break;
      case 'DELETE':
        ret = this.http.delete(url, {
          headers: header,
          observe: 'body',
          params: params
        })
        break;
      default:
        break;
    }
    return new Observable(obs => {
     ret.subscribe(res => {
       obs.next(res),
       obs.complete()
     }), (err:any) => {
       JSUTILS.commonHandleError(err,this.msg);
       obs.error(err);
     }
    })
  }
}
