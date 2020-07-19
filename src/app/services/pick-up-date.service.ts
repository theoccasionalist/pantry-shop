import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as moment from 'moment-timezone';

@Injectable({
  providedIn: 'root'
})
// THIS SERVICE ONLY CURRENTLY RETURNS PICK UP DATES FOR TOMORROW OR MONDAY
// THE METHODS MARKED "UNUSED" WERE PART OF THE THE ORIGINAL DESIGN TO
// RETURN SPECIFIC DAYS OF THE WEEK FOR DIFFERENT PICK UP LOCATIONS
// IN THE FUTURE WE MAY RE-IMPLEMENT THIS DESIGN, SO THEY WERE LEFT HERE
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

  pickUpDate: string = null;
  private pickUpDateSource = new BehaviorSubject(this.pickUpDate);
  currentPickUpDate = this.pickUpDateSource.asObservable();

  constructor() { }

  // UNUSED
  private formatDate(date: Date) {
    const weekDay = this.daysOfTheWeek.get(date.getDay());
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return weekDay + ' (' + month + '/' + day + '/' + year + ')';
  }

  getPickUpDate(): Observable<string> {
    return this.currentPickUpDate;
  }

  getTomorrowPickUpOption(): string[] {
    return moment().tz('America/New_York').day() < 5 ?
      this.pickUpDateOptions = ['Tomorrow'] :
      this.pickUpDateOptions = ['Monday'];
  }

  // UNUSED
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

  // UNUSED
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

  // UNUSED
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

  setTomorrowPickUpDate() {
    if (moment().tz('America/New_York').day() < 5) {
      this.pickUpDate = moment().tz('America/New_York').add(1, 'day').format('MM/DD/YYYY');
    } else if (moment().tz('America/New_York').day() === 5) {
      this.pickUpDate = moment().tz('America/New_York').add(3, 'day').format('MM/DD/YYYY');
    } else if (moment().tz('America/New_York').day() === 6) {
      this.pickUpDate = moment().tz('America/New_York').add(2, 'day').format('MM/DD/YYYY');
    }
  }

  resetPickUpDate() {
    const defaultPickUpDate: string = null;
    this.pickUpDateSource.next(defaultPickUpDate);
  }

  // UNUSED
  updatePickUpDate(pickUpDate: string) {
    this.pickUpDateSource.next(pickUpDate);
  }

  updatePickUpDateTomorrow() {
    this.pickUpDateSource.next(this.pickUpDate);
  }
}
