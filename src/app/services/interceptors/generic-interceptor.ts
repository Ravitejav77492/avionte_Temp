import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Utils } from 'src/app/shared/utilities/utils';
import { catchError, finalize, tap } from 'rxjs/operators';
import { HostService } from '../main/host.service';

@Injectable()

export class GeneticInterceptor implements HttpInterceptor {

    constructor(private hostService: HostService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let observable;

        if (!req.url.includes('login')) {
            observable = req.clone({
                headers: req.headers.set('auth-token', "Auth Token Here"),
                url: this.hostService.getHostURL() + req.url
            });

        } else {
            observable = req.clone({
                url: this.hostService.getHostURL() + req.url
            });
        }
        return next.handle(observable).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {

            }
        }, (error) => {

        })
        );

    }
}
