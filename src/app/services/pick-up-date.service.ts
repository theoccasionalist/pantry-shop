import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PickUpDateService {
  daysOfTheWeek = new Map([
    [0, 'Sunday'],
    [1, 'Monday'],
    [2, 'Tuesday'],
    [3, 'Wednesday'],
    [4, 'Thursday'],
    [5, 'Friday'],
    [6, 'Saturday']
  ]);
  now = new Date();
  pickUpDateOptions: string[];

  constructor() { }

  private formatDate(date: Date) {
    const weekDay = this.daysOfTheWeek.get(date.getDay());
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return weekDay + ' (' + month + '/' + day + '/' + year + ')';
  }

  getPickUpDateOptions(referral: boolean) {
    if (!referral) {
      let secondThursday = this.findNthWeekdayOfMonth(4, 2, false);
      let secondSaturday = this.findNthWeekdayOfMonth(6, 2, false);
      if (this.now > secondThursday && this.now > secondSaturday) {
        secondThursday = this.findNthWeekdayOfMonth(4, 2, true);
        secondSaturday = this.findNthWeekdayOfMonth(6, 2, true);
      }
      if (this.now < secondThursday && this.now > secondSaturday) {
        this.orderAndPush(secondThursday);
      } else if (this.now > secondThursday && this.now < secondSaturday) {
        this.orderAndPush(secondSaturday);
      } else {
        this.orderAndPush(secondThursday, secondSaturday);
      }
    } else {
      let thirdWednesday = this.findNthWeekdayOfMonth(3, 3, false);
      if (this.now > thirdWednesday) {
        thirdWednesday = this.findNthWeekdayOfMonth(3, 3, true);
      }
      this.orderAndPush(thirdWednesday);
    }
    return this.pickUpDateOptions;
  }

  private findNthWeekdayOfMonth(weekday: number, n: number, nextMonth: boolean) {
    let pickUpDate = new Date();
    let firstOfTheMonth = new Date(this.now.getFullYear(), this.now.getMonth(), 1);
    if (nextMonth) {
      pickUpDate = new Date(this.now.getFullYear(), this.now.getMonth() + 1);
      firstOfTheMonth = new Date(this.now.getFullYear(), this.now.getMonth() + 1, 1);
    }
    const add = (weekday - firstOfTheMonth.getDay() + 7) % 7 + (n - 1) * 7;
    pickUpDate.setDate(1 + add);
    return pickUpDate;
  }

  private orderAndPush(firstDay: Date, secondDay?: Date) {
    this.pickUpDateOptions = [];
    if (firstDay && secondDay) {
      if (firstDay < secondDay) {
        this.pickUpDateOptions.push(this.formatDate(firstDay));
        this.pickUpDateOptions.push(this.formatDate(secondDay));
      } else {
        this.pickUpDateOptions.push(this.formatDate(secondDay));
        this.pickUpDateOptions.push(this.formatDate(firstDay));
      }
    } else {
      this.pickUpDateOptions.push(this.formatDate(firstDay));
    }
  }
}
