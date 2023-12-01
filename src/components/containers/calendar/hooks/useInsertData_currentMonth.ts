import { CalendarEntryData } from "../../../../shared/interfaces/calendarEntryData.interface";
import { Event } from "../../../../shared/interfaces/event.interface";

export default function useInsertData_currentMonth(date: Date, calendarData: CalendarEntryData[], events: Event[]) {
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1;
    if (firstDay === -1) firstDay = 6; 
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    
    for (let i=firstDay, j=1; i<(firstDay+daysInMonth); i++, j++) {

        let eventsOfDay: Event[] = [];
        for (let event of events) {
            if (new Date(event.dateVenue).getDate() === j) {
                eventsOfDay.push(event);
            }
        };

        calendarData[i] = { 
            displayValue: String(j), 
            events: eventsOfDay,
            inCurrentMonth: true,
        };
    };

};