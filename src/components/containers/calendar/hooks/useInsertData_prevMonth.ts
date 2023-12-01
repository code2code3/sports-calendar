import { CalendarEntryData } from "../../../../shared/interfaces/calendarEntryData.interface";
import { Event } from "../../../../shared/interfaces/event.interface";

export default function insertCalendarData_prevMonth(date: Date, calendarData: CalendarEntryData[], events: Event[]) {
    let firstDay_currentMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1;
    if (firstDay_currentMonth === -1) firstDay_currentMonth = 6; 
    const lastDate_prevMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    for (let i=0; i<firstDay_currentMonth; i++) {

        let eventsOfDay: Event[] = [];
        for (let event of events) {
            console.log(event);
            if (new Date(event.dateVenue).getDate() === (lastDate_prevMonth-firstDay_currentMonth)+(i+1)) {
                eventsOfDay.push(event);
            }
        };

        calendarData[i] = { 
            displayValue: String((lastDate_prevMonth-firstDay_currentMonth)+(i+1)), 
            events: eventsOfDay,
            inCurrentMonth: false,
        };
    }
};