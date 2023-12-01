import { Event } from './event.interface';

interface CalendarEntryData {
    displayValue: string,
    events: Event[],
    inCurrentMonth: true | false,
};

export type { CalendarEntryData };