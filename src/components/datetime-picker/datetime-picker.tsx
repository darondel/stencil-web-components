import { Component } from '@stencil/core';

@Component({
  tag: 'datetime-picker',
  styleUrl: 'datetime-picker.css'
})
export class DatetimePicker {

  render() {
    return [
      <ion-app>
        <ion-tabs>
          <ion-tab tab="date">
            <date-picker></date-picker>
          </ion-tab>
          <ion-tab tab="time">
            <time-picker></time-picker>
          </ion-tab>

          <ion-tab-bar slot="top">
            <ion-tab-button tab="date">
              <ion-icon name="calendar"></ion-icon>
              <ion-label>Date</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="time">
              <ion-icon name="time"></ion-icon>
              <ion-label>Time</ion-label>
            </ion-tab-button>
          </ion-tab-bar>
        </ion-tabs>
      </ion-app>
    ];
  }

}
