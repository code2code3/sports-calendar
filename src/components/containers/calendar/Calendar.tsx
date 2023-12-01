import { useState, useContext } from 'react';

import { CalendarEntryData } from '../../../shared/interfaces/calendarEntryData.interface';
import { Event } from '../../../shared/interfaces/event.interface';
import { DataContext } from '../../../context/Context';

import CalendarView from "../../views/calendar/Calendar";
import useGetEventsInViewableMonths from './hooks/useGetEventsInViewableMonths';
import useInsertData_currentMonth from './hooks/useInsertData_currentMonth';
import useInsertData_prevMonth from './hooks/useInsertData_prevMonth';
import useInsertData_nextMonth from './hooks/useInsertData_nextMonth';

const prevMonth = (setDate: React.Dispatch<React.SetStateAction<Date>>) => {
    setDate(prevState => {
        return new Date(prevState.getFullYear(), prevState.getMonth() - 1);
    });
};

const nextMonth = (setDate: React.Dispatch<React.SetStateAction<Date>>) => {
    setDate(prevState => {
        return new Date(prevState.getFullYear(), prevState.getMonth() + 1);
    });
};

export default function Calendar() {

    const [ date, setDate ] = useState<Date>(new Date());
    const { data: events } = useContext(DataContext);

    const calendarRows = 6;
    const calendarCols = 7;

    let calendarData: CalendarEntryData[] = new Array(calendarRows*calendarCols)
    .fill({ displayValue: "", events: [], inCurrentMonth: false });

    const [eventsPrevMonth, eventsCurrentMonth, eventsNextMonth ]: Array<Event[]> = useGetEventsInViewableMonths(date, events);
    useInsertData_currentMonth(date, calendarData, eventsCurrentMonth);
    useInsertData_prevMonth(date, calendarData, eventsPrevMonth);
    useInsertData_nextMonth(date, calendarData, calendarRows*calendarCols, eventsNextMonth);
    
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear().toString();

    return <CalendarView 
        rows={calendarRows}
        cols={calendarCols}
        month={month} 
        year={year}
        prevMonth={ () => { prevMonth(setDate) } }
        nextMonth={ () => { nextMonth(setDate) } }
        calendarData={calendarData}
    />;
};