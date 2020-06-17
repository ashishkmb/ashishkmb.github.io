import { Injectable } from '@angular/core';
import { finalize, tap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    public httpRequestCount = 0;
    constructor(private spinnerService: NgxSpinnerService ) {}
    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.spinnerService.show();

        this.httpRequestCount++;
        return next.handle(request).pipe (tap(), finalize(() => {
                this.httpRequestCount--;
                if ( this.httpRequestCount === 0 ) {
                    this.spinnerService.hide();
                    }
                })
        );
    }
}
