import { useState } from "react";

import { CalendarEntryData } from "../../../shared/interfaces/calendarEntryData.interface";
import { Event } from "../../../shared/interfaces/event.interface";

import CalendarGrid from "./CalendarGrid";
import EventsList from "./EventsList";

interface Props {
    rows: number,
    cols: number,
    month: string,
    year: string,
    prevMonth: () => void,
    nextMonth: () => void,
    calendarData: CalendarEntryData[],
    date: Date,
}

export default function CalendarView({ rows, cols, month, year, prevMonth, nextMonth, calendarData }: Props) {
    
    const [selectedEvents, setSelectedEvents] = useState<Event[]>([]);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [eventViewIsOpen, setEventViewIsOpen] = useState(false);

    const exitEventsView = () => {
        setEventViewIsOpen(false);
    };
    
    const openEventsView = (date: Date, events: Event[]) => {
        setSelectedDate(date);
        setSelectedEvents(events);
        setEventViewIsOpen(true);
    };

    const CalendarView = <>
        <div>
            <div>
                <span>{month} {year}</span>
                <button onClick={ prevMonth }>Prev</button>
                <button onClick={ nextMonth }>Next</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                        <th>Sun</th>
                    </tr>
                </thead>
                <tbody>
                    <CalendarGrid rows={rows} cols={cols} data={calendarData} openEventsView={openEventsView}/>
                </tbody>
            </table>
        </div>
    </>;

    return (!eventViewIsOpen)
        ? CalendarView
        : <EventsList events={selectedEvents} exitEventsView={exitEventsView} selectedDate={selectedDate}/>
};