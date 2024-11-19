import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  
})
export class SharedDataService {
  public dataSubject = new BehaviorSubject<any>(null);
  setData(data: any) {
    debugger
    this.dataSubject.next(data);
  }

  getData() {
    debugger
    return this.dataSubject.asObservable();
  }
}
