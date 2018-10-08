import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { IBikeData } from './ibike-data';
import {tap,catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BikeDataService {
HTTP:HttpClient;
url:string;
  constructor(http:HttpClient) {
    this.HTTP=http;
    this.url = "../../bikedata.json";
   }
  getdata():Observable<IBikeData[]>{
    return this.HTTP.get<IBikeData[]>(this.url).pipe(tap(data=>console.log(JSON.stringify(data))),catchError(this.handleErr));
  }
   private handleErr(err:HttpErrorResponse){
      return Observable.throw(err.message);
      
  } 
}
