import { Component, Event, EventEmitter, Prop } from '@stencil/core';

import moment, { Moment } from 'moment';

@Component({
  tag: 'calendar-picker',
  styleUrl: 'calendar-picker.css'
})
export class CalendarPicker {

  @Prop() year: number;
  @Prop() month: number;
  @Event() pick: EventEmitter<Moment>;

  weekdays: string[] = moment.weekdays();

  getCalendar(): Moment[][] {
    let result: Moment[][] = [];
    const date = moment([this.year, this.month]);
    const startDay: Moment = date.clone().startOf('month').startOf('week').subtract(1, 'day');
    const endDay: Moment = date.clone().endOf('month').endOf('week');

    while (startDay.isBefore(endDay, 'day')) {
      result.push(Array(7).fill(0).map(() => startDay.add(1, 'day').clone()))
    }

    return result;
  }

  render() {
    let result = null;

    if (this.year && this.month) {
      const columnSize: string = String(12 / this.weekdays.length);

      result = (
        <ion-grid>
          <ion-row align-items-center>
            {this.weekdays.map(weekday => {
              return (
                <ion-col size={columnSize} text-center>
                  <strong>
                    {weekday.charAt(0)}
                  </strong>
                </ion-col>
              );
            })}
          </ion-row>
          {this.getCalendar().map(week => {
            return (
              <ion-row align-items-center>
                {week.map(day => {
                  return (
                    <ion-col size={columnSize} text-center>
                      <ion-button fill="clear" disabled={day.month() !== this.month} onClick={() => this.pick.emit(day)}>
                        {day.format('D')}
                      </ion-button>
                    </ion-col>
                  );
                })}
              </ion-row>
            );
          })}
        </ion-grid>
      );
    }

    return result;
  }

}
