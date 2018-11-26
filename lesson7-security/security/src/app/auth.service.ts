import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private showPreloader$ = new BehaviorSubject(false);

  constructor() { }

  changePreloaderShowed(cond = false) {
    this.showPreloader$.next(cond);
  }

  isPreloaderShowed() {
    return this.showPreloader$ as Observable<boolean>;
  }

  isAuth(): Observable<boolean> {
    return of(true).pipe(delay(2000));
  }
}
