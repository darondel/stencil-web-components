import { Component, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'year-picker',
  styleUrl: 'year-picker.css'
})
export class YearPicker {

  @Prop() year: number;
  @Event() pick: EventEmitter<number>;

  render() {
    let result = null;

    if (this.year) {
      result = (
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button onClick={() => this.pick.emit(this.year - 1)}>
              <ion-icon name="arrow-dropleft"></ion-icon>
            </ion-button>
          </ion-buttons>

          <ion-title text-center>
            {this.year}
          </ion-title>

          <ion-buttons slot="end">
            <ion-button onClick={() => this.pick.emit(this.year + 1)}>
              <ion-icon name="arrow-dropright"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      );
    }

    return result;
  }

}
