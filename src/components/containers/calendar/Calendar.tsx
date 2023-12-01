import { useState } from 'react';

import { CalendarEntryData } from '../../../shared/interfaces/calendarEntryData.interface';

import CalendarView from "../../views/calendar/Calendar";

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

const insertCalendarData_currentMonth = (date: Date, calendarData: CalendarEntryData[]) => {
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1;
    if (firstDay === -1) firstDay = 6; 
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    
    for (let i=firstDay, j=1; i<(firstDay+daysInMonth); i++, j++) {
        calendarData[i] = { 
            displayValue: String(j), 
            event: undefined,
            inCurrentMonth: true,
        };
    };

    return calendarData;
};

const insertCalendarData_prevMonth = (date: Date, calendarData: CalendarEntryData[]) => {
    let firstDay_currentMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1;
    if (firstDay_currentMonth === -1) firstDay_currentMonth = 6; 
    const lastDate_prevMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    for (let i=0; i<firstDay_currentMonth; i++) {
        calendarData[i] = { 
            displayValue: String((lastDate_prevMonth-firstDay_currentMonth)+(i+1)), 
            event: undefined,
            inCurrentMonth: false,
        };
    }
};

const insertCalendarData_nextMonth = (date: Date, calendarData: CalendarEntryData[], calendarCellLength: number) => {
    let firstDay_currentMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1;
    if (firstDay_currentMonth === -1) firstDay_currentMonth = 6; 
    const lastDay_currentMonth = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();

    for (let i=(firstDay_currentMonth+lastDay_currentMonth), j=0; i<calendarCellLength; i++, j++) {
        calendarData[i] = { 
            displayValue: String(j+1), 
            event: undefined,
            inCurrentMonth: false,
        };
    }
};


export default function Calendar() {

    const [ date, setDate ] = useState<Date>(new Date());

    const calendarRows = 6;
    const calendarCols = 7;

    let calendarData: CalendarEntryData[] = new Array(calendarRows*calendarCols)
    .fill({ displayValue: "", clickAction: undefined });

    insertCalendarData_currentMonth(date, calendarData);
    insertCalendarData_prevMonth(date, calendarData);
    insertCalendarData_nextMonth(date, calendarData, calendarRows*calendarCols);
    
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