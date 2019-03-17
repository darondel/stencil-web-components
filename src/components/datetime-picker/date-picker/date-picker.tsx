import { Component, Event, EventEmitter, State } from '@stencil/core';

import moment, { Moment } from 'moment';

@Component({
  tag: 'date-picker',
  styleUrl: 'date-picker.css'
})
export class DatePicker {

  @Event() pick: EventEmitter<Moment>;

  @State() currentDate: Moment = moment();
  @State() currentYear: number = this.currentDate.year();
  @State() currentMonth: number = this.currentDate.month();

  onPickDate(date: Moment) {
    this.currentDate = date;
    this.pick.emit(date);
  }

  render() {
    return [
      <ion-header>
        <date-picker-selected-date date={this.currentDate}></date-picker-selected-date>
        <year-picker year={this.currentYear} onPick={year => this.currentYear = year.detail}></year-picker>
        <month-picker month={this.currentMonth} onPick={month => this.currentMonth = month.detail}></month-picker>
      </ion-header>,

      <ion-content padding>
        <calendar-picker year={this.currentYear} month={this.currentMonth} onPick={date => this.onPickDate(date.detail)}></calendar-picker>
      </ion-content>
    ];
  }

}
