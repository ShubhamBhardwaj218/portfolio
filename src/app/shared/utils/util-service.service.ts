import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilServiceService {

  constructor() { }

  listTransformation(value: string) {
    if (!value) {
      return [];
    }
    const items: string[] = value.split('#');
    const transformedList: string[] = [];

    for (const item of items) {
      transformedList.push(item);
    }

    return transformedList;
  }

  experienceCalculator(): string{
    const date1 = new Date('2021-01-01');
    const date2 = new Date();

    let years = date2.getFullYear() - date1.getFullYear();
    let months = date2.getMonth() - date1.getMonth();
    let days = date2.getDate() - date1.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(date2.getFullYear(), date2.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }
   return `${years} years ${months} months and ${days} days`;

  }
}

