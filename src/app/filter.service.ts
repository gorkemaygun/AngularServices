import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private personArr: Person[] = [
    new Person('Gorkem', 'Aygun'),
    new Person('Senem', 'Aygun Cetiner'),
    new Person('Yusuf Kerem', 'Cetiner'),
  ];
  constructor() {}

  getPerson(): Person[] {
    return this.personArr;
  }
}
