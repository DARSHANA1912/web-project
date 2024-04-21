import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodeUtilityService {
  

  constructor(private httpClient:HttpClient) { 

  }
  url:string="http://localhost:5000/";

  insert(username: string, email: string, password: string): Observable<any> {
    // Check if any parameter is null or empty
    if (!username || !email || !password) {
      return throwError(new Error('All fields (username, email, password) are required.'));
    }

    // Make the HTTP request
    return this.httpClient.get<any>(
      this.url + 'insert?username=' + username + '&email=' + email + '&password=' + password
    ).pipe(
      catchError((error) => {
        return throwError(new Error('Failed to insert user data: ' + error.message));
      })
    );
  }
  insert1(email: string, password: string): Observable<any> {
    // Check if any parameter is null or empty
    if (!email || !password) {
      return throwError(new Error('Email and password are required.'));
    }

    // Make the HTTP request
    return this.httpClient.get<any>(
      this.url + 'insert1?email=' + email + '&password=' + password
    ).pipe(
      catchError((error) => {
        return throwError(new Error('Failed to insert user data: ' + error.message));
      })
    );
  }
  insert2(
    user: string,
    packageName: string,
    packageType: string,
    numberOfPersons: number,
    selectedSlot: string,
    totalPrice: number
  ): Observable<any> {
    // Check if any parameter is null or empty
    if (!user || !packageName || !packageType || !selectedSlot) {
      return throwError(new Error('All fields (user, packageName, packageType, selectedSlot) are required.'));
    }

    // Make the HTTP request
    const url = `${this.url}insert2`;
    return this.httpClient.get<any>(
      `${url}?email=${user}&packageName=${packageName}&packagetype=${packageType}&noofpersons=${numberOfPersons}&selectedslot=${selectedSlot}&price=${totalPrice}`
    ).pipe(
      catchError((error) => {
        return throwError(new Error('Failed to insert data: ' + error.message));
      })
    );
  }
  
  delete(email: string): Observable<any> {
    return this.httpClient.get(
      this.url + 'delete?email=' + email);
  }
  display():Observable<any>{
    return this.httpClient.get(this.url+"findAll");
  }
  update(email:string,password:string):Observable<any>{
    return this.httpClient.get(this.url+ "update?email="+email+"&password="+password);
  }
  findOne(email: string): Observable<any> {
    return this.httpClient.get<any>(this.url+"findOne?email="+email);
  }

  updateUser(username:string,email:string,password:string):Observable<any>{
    return this.httpClient.get(this.url+ "update?username="+username+"&email="+email+"&password="+password);
  }
}
