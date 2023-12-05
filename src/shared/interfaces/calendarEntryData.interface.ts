import { Event } from './event.interface';

interface CalendarEntryData {
    date: Date,
    displayValue: string,
    events: Event[],
    inCurrentMonth: true | false,
};

export type { CalendarEntryData };