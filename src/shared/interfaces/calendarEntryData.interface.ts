import { Event } from './event.interface';

interface CalendarEntryData {
    displayValue: string,
    event: Event | undefined,
    inCurrentMonth: true | false,
};

export type { CalendarEntryData };