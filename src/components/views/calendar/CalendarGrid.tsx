import { CalendarEntryData } from "../../../shared/interfaces/calendarEntryData.interface";
import { Event } from "../../../shared/interfaces/event.interface";

interface Props {
    rows: number,
    cols: number,
    data: CalendarEntryData[],
    openEventsView: (date: Date, event: Event[]) => void,
}

export default function CalendarGrid({ rows, cols, data, openEventsView }: Props) {

    let calendarGrid = [];

    for (let i=0; i<rows; i++) {

        let row = [];

        for (let j=0; j<cols; j++) {

            const cellKey = (i*cols) + j;
            const dayHasEvents = data[cellKey].events.length > 0;
            row.push(
                <td 
                    key={cellKey} 
                    className={data[cellKey].inCurrentMonth ? "active" : "inactive"}
                >
                    <button onClick={ () => { openEventsView(data[cellKey].date, data[cellKey].events) } }>
                        {data[cellKey].displayValue}
                        {dayHasEvents ? `(${data[cellKey].events.length})` : ""}
                    </button>
                </td>
            );

        }

        calendarGrid.push(<tr key={i}>{row}</tr>)

    }

    return calendarGrid;

}