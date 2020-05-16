import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {CoreModel} from './core.model';

export class RestTemplateService<E extends CoreModel> {

  constructor(protected _http: HttpClient, protected url: string) { }

  getAll(): Observable<HttpResponse<E[]>> {
    return this._http.get<E[]>(`${environment.api}/${this.url}`,{observe: 'response', params: {body: 'array'}});
  }
  getOne(id: number | string): Observable<E> {
    return this._http.get<E>(`${environment.api}/${this.url}/${id}`);
  }
  post(obj: E): Observable<E> {
    return this._http.post<E>(`${environment.api}/${this.url}`, obj);
  }
  put(obj: E): Observable<E> {
    return this._http.put<E>(`${environment.api}/${this.url}/${obj.id}`, obj);
  }
  removeOne(id: number | string): Observable<any> {
    return this._http.delete(`${environment.api}/${this.url}/${id}`);
  }

}
