import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, flatMap } from 'rxjs/operators';

export class MyPreload implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data.nopreload) return of(false);
    else return of(true).pipe(delay(5000), flatMap(_ => load()));
  }
}
