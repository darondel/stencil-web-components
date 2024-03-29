/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@ionic/core';
import 'ionicons';
import {
  EventEmitter,
} from '@stencil/core';
import {
  Moment,
} from 'moment';


export namespace Components {

  interface CalendarPicker {
    'month': number;
    'year': number;
  }
  interface CalendarPickerAttributes extends StencilHTMLAttributes {
    'month'?: number;
    'onPick'?: (event: CustomEvent<Moment>) => void;
    'year'?: number;
  }

  interface DatePickerSelectedDate {
    'date': Moment;
  }
  interface DatePickerSelectedDateAttributes extends StencilHTMLAttributes {
    'date'?: Moment;
  }

  interface DatePicker {}
  interface DatePickerAttributes extends StencilHTMLAttributes {
    'onPick'?: (event: CustomEvent<Moment>) => void;
  }

  interface MonthPicker {
    'month': number;
  }
  interface MonthPickerAttributes extends StencilHTMLAttributes {
    'month'?: number;
    'onPick'?: (event: CustomEvent<number>) => void;
  }

  interface YearPicker {
    'year': number;
  }
  interface YearPickerAttributes extends StencilHTMLAttributes {
    'onPick'?: (event: CustomEvent<number>) => void;
    'year'?: number;
  }

  interface DatetimePicker {}
  interface DatetimePickerAttributes extends StencilHTMLAttributes {}

  interface TimePicker {}
  interface TimePickerAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'CalendarPicker': Components.CalendarPicker;
    'DatePickerSelectedDate': Components.DatePickerSelectedDate;
    'DatePicker': Components.DatePicker;
    'MonthPicker': Components.MonthPicker;
    'YearPicker': Components.YearPicker;
    'DatetimePicker': Components.DatetimePicker;
    'TimePicker': Components.TimePicker;
  }

  interface StencilIntrinsicElements {
    'calendar-picker': Components.CalendarPickerAttributes;
    'date-picker-selected-date': Components.DatePickerSelectedDateAttributes;
    'date-picker': Components.DatePickerAttributes;
    'month-picker': Components.MonthPickerAttributes;
    'year-picker': Components.YearPickerAttributes;
    'datetime-picker': Components.DatetimePickerAttributes;
    'time-picker': Components.TimePickerAttributes;
  }


  interface HTMLCalendarPickerElement extends Components.CalendarPicker, HTMLStencilElement {}
  var HTMLCalendarPickerElement: {
    prototype: HTMLCalendarPickerElement;
    new (): HTMLCalendarPickerElement;
  };

  interface HTMLDatePickerSelectedDateElement extends Components.DatePickerSelectedDate, HTMLStencilElement {}
  var HTMLDatePickerSelectedDateElement: {
    prototype: HTMLDatePickerSelectedDateElement;
    new (): HTMLDatePickerSelectedDateElement;
  };

  interface HTMLDatePickerElement extends Components.DatePicker, HTMLStencilElement {}
  var HTMLDatePickerElement: {
    prototype: HTMLDatePickerElement;
    new (): HTMLDatePickerElement;
  };

  interface HTMLMonthPickerElement extends Components.MonthPicker, HTMLStencilElement {}
  var HTMLMonthPickerElement: {
    prototype: HTMLMonthPickerElement;
    new (): HTMLMonthPickerElement;
  };

  interface HTMLYearPickerElement extends Components.YearPicker, HTMLStencilElement {}
  var HTMLYearPickerElement: {
    prototype: HTMLYearPickerElement;
    new (): HTMLYearPickerElement;
  };

  interface HTMLDatetimePickerElement extends Components.DatetimePicker, HTMLStencilElement {}
  var HTMLDatetimePickerElement: {
    prototype: HTMLDatetimePickerElement;
    new (): HTMLDatetimePickerElement;
  };

  interface HTMLTimePickerElement extends Components.TimePicker, HTMLStencilElement {}
  var HTMLTimePickerElement: {
    prototype: HTMLTimePickerElement;
    new (): HTMLTimePickerElement;
  };

  interface HTMLElementTagNameMap {
    'calendar-picker': HTMLCalendarPickerElement
    'date-picker-selected-date': HTMLDatePickerSelectedDateElement
    'date-picker': HTMLDatePickerElement
    'month-picker': HTMLMonthPickerElement
    'year-picker': HTMLYearPickerElement
    'datetime-picker': HTMLDatetimePickerElement
    'time-picker': HTMLTimePickerElement
  }

  interface ElementTagNameMap {
    'calendar-picker': HTMLCalendarPickerElement;
    'date-picker-selected-date': HTMLDatePickerSelectedDateElement;
    'date-picker': HTMLDatePickerElement;
    'month-picker': HTMLMonthPickerElement;
    'year-picker': HTMLYearPickerElement;
    'datetime-picker': HTMLDatetimePickerElement;
    'time-picker': HTMLTimePickerElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
