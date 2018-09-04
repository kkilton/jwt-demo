import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.indexOf('authenticate') > -1) {
            return next.handle(req);
        }
        const token = sessionStorage.getItem('token');

        let authReq = req.clone({
            headers: req.headers
                .append('Authorization', `Bearer ${token}`)
        });
        return next
            .handle(authReq)
            .do((ev: HttpEvent<any>) => {
                const resp = ev as HttpResponse<any>;
                if (ev instanceof HttpResponse) {
                    if (ev.status == 401) {
                        this.router.navigate(['login']);
                        return;
                    }

                    if (resp) {
                        var token = resp.headers.get('token');
                        if (token) {
                            sessionStorage.setItem('token', token);
                        }
                    }
                }
            });
    }
}