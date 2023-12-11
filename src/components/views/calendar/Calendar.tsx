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
            <div className="flex justify-between items-center">
                <span className="font-bold md:text-xl">{month} {year}</span>
                <span>
                    <button className="text-lg md:text-2xl text-gray-400" onClick={ prevMonth }>&lt;</button>
                    {" "}
                    <button className="text-lg md:text-2xl text-gray-400" onClick={ nextMonth }>&gt;</button>
                </span>
            </div>
            <table className="w-full table-fixed text-right my-2">
                <thead>
                    <tr>
                        <th className="font-normal">Mon</th>
                        <th className="font-normal">Tue</th>
                        <th className="font-normal">Wed</th>
                        <th className="font-normal">Thu</th>
                        <th className="font-normal">Fri</th>
                        <th className="font-normal">Sat</th>
                        <th className="font-normal">Sun</th>
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