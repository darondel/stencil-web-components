import { Component, Prop } from '@stencil/core';

import { Moment } from 'moment';

@Component({
  tag: 'date-picker-selected-date',
  styleUrl: 'date-picker-selected-date.css'
})
export class DataPickerSelectedDate {

  @Prop() date: Moment;

  render() {
    let result = null;

    if (this.date) {
      result = (
        <ion-toolbar>
          <ion-title text-center>
            {this.date.format('GGGG-MM-DD')}
          </ion-title>
        </ion-toolbar>
      );
    }

    return result;
  }

}
