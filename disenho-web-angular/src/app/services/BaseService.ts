import { Inject, Injectable, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const STRING_TOKEN = new InjectionToken<string>('uriSingular');

@Injectable({
  providedIn: 'root',
})
export class BaseService<T> {
  private apiUrl: string = 'http://localhost:8085';
  private apiUrlSingular: string;
  private apiUrlPlural: string;

  constructor(
    private http: HttpClient,
    @Inject(STRING_TOKEN) private uriSingular: string,
    @Inject(STRING_TOKEN) private uriPlural: string
  ) {
    this.apiUrlSingular = `${this.apiUrl}/${this.uriSingular}`;
    this.apiUrlPlural = `${this.apiUrl}/${this.uriPlural}`;
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.apiUrlPlural);
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
}
