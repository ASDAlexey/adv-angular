import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, retry } from 'rxjs/operators';

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // rewrite request
    const authReq = req.clone({ headers: req.headers.set('headerName', '555') });

    return next.handle(authReq).pipe(
      retry(2),
      delay(3000),
      // rewrite resporse from server
      catchError((error: HttpErrorResponse) => {
        // 401 - пользователь не залогинен
        // 403 - пользователь залогинен но ему запрещен доступ к ресурсу
        if (error.status === 401) {
          // unauthorized
          // redirect to /login
        } else if (error.status === 403) {
          // contact admin нет доступа к ресурсу
        }

        return throwError(error);
      }),
    );
  }
}
