import { Component, Event, EventEmitter, Prop } from '@stencil/core';

import moment from 'moment';

@Component({
  tag: 'month-picker',
  styleUrl: 'month-picker.css'
})
export class MonthPicker {

  @Prop() month: number;
  @Event() pick: EventEmitter<number>;

  months: string[] = moment.months();

  render() {
    let result = null;

    if (this.month) {
      result = (
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button onClick={() => this.pick.emit(this.month - 1)}>
              <ion-icon name="arrow-dropleft"></ion-icon>
            </ion-button>
          </ion-buttons>

          <ion-title text-center>
            {this.months[this.month]}
          </ion-title>

          <ion-buttons slot="end">
            <ion-button onClick={() => this.pick.emit(this.month + 1)}>
              <ion-icon name="arrow-dropright"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      );
    }

    return result;
  }

}
