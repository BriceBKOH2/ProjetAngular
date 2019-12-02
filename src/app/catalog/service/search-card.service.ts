import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchCardService {
  searchForm$: Subject<string> = new Subject();
  constructor() {}
}
