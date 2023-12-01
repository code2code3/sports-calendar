import { CalendarEntryData } from "../../../../shared/interfaces/calendarEntryData.interface";
import { Event } from "../../../../shared/interfaces/event.interface";

export default function useInsertData_nextMonth(date: Date, calendarData: CalendarEntryData[], calendarCellLength: number, events: Event[]) {
    let firstDay_currentMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1;
    if (firstDay_currentMonth === -1) firstDay_currentMonth = 6; 
    const lastDay_currentMonth = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();

    for (let i=(firstDay_currentMonth+lastDay_currentMonth), j=0; i<calendarCellLength; i++, j++) {
        
        let eventsOfDay: Event[] = [];
        for (let event of events) {
            if (new Date(event.dateVenue).getDate() === j+1) {
                eventsOfDay.push(event);
            }
        };
        
        calendarData[i] = { 
            displayValue: String(j+1), 
            events: eventsOfDay,
            inCurrentMonth: false,
        };
    }
};