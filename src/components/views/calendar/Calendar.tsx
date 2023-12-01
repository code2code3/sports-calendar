import { CalendarEntryData } from "../../../shared/interfaces/calendarEntryData.interface";

import CalendarGrid from "./CalendarGrid";

interface Props {
    rows: number,
    cols: number,
    month: string,
    year: string,
    prevMonth: () => void,
    nextMonth: () => void,
    calendarData: CalendarEntryData[]
}

export default function CalendarView({ rows, cols, month, year, prevMonth, nextMonth, calendarData }: Props) {
    return <>
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
                    <CalendarGrid rows={rows} cols={cols} data={calendarData}/>
                </tbody>
            </table>
        </div>
    </>;
};