import { Component, State } from '@stencil/core';

import moment, { Moment } from 'moment';

@Component({
  tag: 'time-picker',
  styleUrl: 'time-picker.css'
})
export class TimePicker {

  @State() currentDate: Moment = moment();

  renderButton(columnSize: number, icon: string) {
    return (
      <ion-col size={String(columnSize)} text-center>
        <ion-button fill="clear">
          <ion-icon name={icon}></ion-icon>
        </ion-button>
      </ion-col>
    );
  }

  render() {
    const bigColumnSize = 11 / 3;
    const smallColumnSize = 12 - 3 * bigColumnSize;

    return [
      <ion-content padding>
        <ion-grid>
          <ion-row>
            {this.renderButton(bigColumnSize, 'arrow-dropup')}
            <ion-col size={String(smallColumnSize)}></ion-col>
            {this.renderButton(bigColumnSize, 'arrow-dropup')}
            {this.renderButton(bigColumnSize, 'arrow-dropup')}
          </ion-row>
          <ion-row>
            <ion-col size={String(bigColumnSize)} text-center>
              6
            </ion-col>
            <ion-col size={String(smallColumnSize)} text-center>
              :
            </ion-col>
            <ion-col size={String(bigColumnSize)} text-center>
              10
            </ion-col>
            <ion-col size={String(bigColumnSize)} text-center>
              PM
            </ion-col>
          </ion-row>
          <ion-row>
            {this.renderButton(bigColumnSize, 'arrow-dropdown')}
            <ion-col size={String(smallColumnSize)}></ion-col>
            {this.renderButton(bigColumnSize, 'arrow-dropdown')}
            {this.renderButton(bigColumnSize, 'arrow-dropdown')}
          </ion-row>
        </ion-grid>
      </ion-content>
    ];
  }

}
