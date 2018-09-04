import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SecureService {
  
  constructor(private http: HttpClient) { }

  getSecureData(): Observable<string> {
    let apiURL = `${environment.apiUrl}test`;
    return this.http.get<string>(apiURL);
  }

  getSecureAdminData(): Observable<string> {
    let apiURL = `${environment.apiUrl}test/GetAdminData`;
    return this.http.get<string>(apiURL);
  }

  getUnsecureData(): Observable<string> {
    let apiURL = `${environment.apiUrl}test/getUnsecureData`;
    return this.http.get<string>(apiURL);
  }
}
