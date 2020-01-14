import { Injectable } from '@angular/core';
import {Item} from './zlotemysli/zloties.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThoughtsService {
  constructor() {}

  getThoughts(): Observable<Item[]> {
    if (JSON.parse(localStorage.getItem('mysli')) == null) {
   //   return [];
    }
    return JSON.parse(localStorage.getItem('mysli'));

  }
}
