import { Inject, Injectable, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isEmpty } from 'lodash';
import { UrlParam } from '../interfaces/UrlParam';

const addUrlParam = (
  url: string,
  key: string,
  value: string | undefined,
  isLastKey: boolean
): string => `${url}${value ? `${key}=${value}${isLastKey ? '' : '&'}` : ''}`;

const addInitialAmpersand = (url: string = ''): string =>
  url.slice(-1) === '&' ? url : `${url}&`;

const addUrlParams = (
  url: string = '',
  params?: UrlParam | undefined
): string => {
  if (isEmpty(params)) return url;

  const paramsKeys = params ? Object.keys(params) : [];
  const initialUrl =
    !isEmpty(params) && url.includes('?')
      ? addInitialAmpersand(url)
      : `${url}?`;

  return paramsKeys.reduce((fullUrl, key, index) => {
    const isLastKey = index === paramsKeys.length - 1;

    return addUrlParam(fullUrl, key, params[key], isLastKey);
  }, initialUrl);
};

const STRING_TOKEN = new InjectionToken<string>('uriSingular');

@Injectable({
  providedIn: 'root',
})
export class BaseService<T> {
  private apiUrl: string = 'http://localhost:8085';
  private apiUrlSingular: string;
  private apiUrlPlural: string;

  constructor(
    protected http: HttpClient,
    @Inject(STRING_TOKEN) private uriSingular: string,
    @Inject(STRING_TOKEN) private uriPlural: string
  ) {
    this.apiUrlSingular = `${this.apiUrl}/${this.uriSingular}`;
    this.apiUrlPlural = `${this.apiUrl}/${this.uriPlural}`;
  }

  getAll(urlParams?: UrlParam): Observable<T[]> {
    return this.http.get<T[]>(addUrlParams(this.apiUrlPlural, urlParams));
  }

  getOne(id: string | number): Observable<T> {
    return this.http.get<T>(`${this.apiUrlSingular}/${id}`);
  }

  create(data: Omit<T, 'id'>): Observable<T> {
    return this.http.post<T>(this.apiUrlSingular, data);
  }

  update(id: string | number, data: T): Observable<T> {
    return this.http.put<T>(`${this.apiUrlSingular}/${id}`, data);
  }

  delete(id: string | number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrlSingular}/${id}`);
  }

  getAllIds(urlParams?: UrlParam): Observable<string[]> {
    return this.http.get<string[]>(addUrlParams(`${this.apiUrlPlural}/ids`, urlParams));
  }
}
