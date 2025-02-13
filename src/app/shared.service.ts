import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
 
  private pageTitleSource = new BehaviorSubject<string>(''); 
  currentTitle$ = this.pageTitleSource.asObservable();

  constructor() {}

  updateTitle(title: string) {
  this.pageTitleSource.next(title);
}
}
