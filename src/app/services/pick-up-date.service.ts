import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PickUpDateService {
  pickUpDate: string;
  pickUpDateOptions: string[];
  constructor() { }

  private formatDate(date: Date, weekDay: string) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return weekDay + ': ' + month + '/' + day + '/' + year;
  }

  getPickUpDateOptions() {
    this.pickUpDateOptions = [];
    const today = new Date();
    if (today.getDay() === 6) {
      today.setDate(today.getDate() + 1);
    }
    for (let i = today.getDay(); i < 6; i++) {
      let formattedDate: string;
      if (i === 3 || i === 5) {
        let weekDay: string;
        i === 3 ? weekDay = 'Thursday' : weekDay = 'Saturday';
        const difference = (i + 1) - today.getDay();
        const pickUpDate = new Date();
        pickUpDate.setDate(today.getDate() + difference);
        formattedDate = this.formatDate(pickUpDate, weekDay);
        this.pickUpDateOptions.push(formattedDate);
      }
    }
    return this.pickUpDateOptions;
  }

  setPickUpDate(pickUpDate: string) {
    this.pickUpDate = pickUpDate;
  }
}
