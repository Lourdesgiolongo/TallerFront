import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
 })
export class RestService {
    
    constructor(private http: HttpClient) { }

    login(params: HttpParams): Observable<any> {
        console.log(params);
        return this.http.post("http://localhost:8080/api/v1/login", params.toString(), {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        });
    }
    
}