import { Injectable } from '@angular/core';
import {Item} from './zlotemysli/zloties.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThoughtsService {
  constructor() {
  }

  set(key: string, data: any) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  get(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }
}
  // getThoughts(): Observable<Item[]> {
  //   if (JSON.parse(localStorage.getItem('mysli')) == null) {
  //     return new Observable<Item[]>();
  //   }
  //   return new Observable<Item[]>(JSON.parse(localStorage.getItem('mysli')));
  //
  // }

