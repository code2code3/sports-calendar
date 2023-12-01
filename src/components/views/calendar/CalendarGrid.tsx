import { CalendarEntryData } from "../../../shared/interfaces/calendarEntryData.interface";

interface Props {
    rows: number,
    cols: number,
    data: CalendarEntryData[],
}

export default function CalendarGrid({ rows, cols, data }: Props) {

    let calendarGrid = [];

    for (let i=0; i<rows; i++) {

        let row = [];

        for (let j=0; j<cols; j++) {

            const cellKey = (i*cols) + j;

            row.push(
                <td 
                    key={cellKey} 
                    className={data[cellKey].inCurrentMonth ? "active" : "inactive"}
                >
                    {data[cellKey].displayValue}
                </td>
            );

        }

        calendarGrid.push(<tr key={i}>{row}</tr>)

    }

    return calendarGrid;

}