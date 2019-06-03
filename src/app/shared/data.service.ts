import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { User } from '../user-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiurl = 'api/users';
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  perfop = {
    headers: this.headers
  };

  constructor(private http: HttpClient) { }

  private handlError(error: any) {
    console.error(error);
    return throwError(error);
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiurl)
    .pipe(tap(data=> console.log(data)),
    catchError(this.handlError)
    );
  }

}
