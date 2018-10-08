import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
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
    return this.HTTP.get<IBikeData[]>(this.url).pipe(catchError(err => {return Observable.throw(err)})); 
    // HOW IS THIS FUNCTION NOT GOT PARENTHESIS WITH PARAMETER INSIDE OF TYPE HTTP ERROR RESPONSE
    // THE FUNCTION ITSELF BELOW EXPECTS A PARAMETER???
  
    /*  private handleErr(err:HttpErrorResponse){                                
       console.log(err.message);
      return Observable.throw(err.message);
      */
    
    }
  }
