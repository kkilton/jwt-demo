import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class UnsecureService {

  constructor(private http: HttpClient) { }

  login(userName: string, password: string) {
    //JWT token method
    let apiURL = `${environment.apiUrl}authentication/login`;
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT"
    });
    let body = `{ "Username": "${userName}", "Password" : "${password}" }`;

    return this.http.post(apiURL, body, { headers: headers });
  }
}
