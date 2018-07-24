import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import ua from 'universal-analytics';

@Injectable()
export class HttpinterceptorService {

  private visitor;

  constructor() {
    this.visitor = ua('UA-111721516-1');
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.visitor.pageview(request.url).send();
    return next.handle(request);
  }
}
