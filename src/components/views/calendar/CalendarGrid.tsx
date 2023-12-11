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
            const isActive = data[cellKey].inCurrentMonth ? "active" : "inactive"
            row.push(
                <td 
                    key={cellKey} 
                    className={ `${isActive} h-12 w-12 md:w-24 md:h-24 border border-gray-300 m-0 p-0` }
                >
                    <button 
                        className="flex flex-col justify-around w-full h-full text-s md:text-lg m-0"
                        onClick={ () => { openEventsView(data[cellKey].date, data[cellKey].events) } }
                    >
                        <span className="flex flex-row justify-end w-full m-0 pr-2">{data[cellKey].displayValue}</span>
                        {dayHasEvents 
                            ? <>
                                <div className="flex flex-row justify-center w-full">
                                    <div 
                                        className="w-full m-0 m-auto w-4 h-4 md:w-8 md:h-8 text-white rounded-full text-sm md:text-lg bg-sky-500/75 flex items-center justify-center font-mono"
                                    >
                                    {data[cellKey].events.length}
                                    </div>   
                                </div>
                            </> 
                            : <div className="w-3 h-3"></div>
                        }
                    </button>
                </td>
            );

        }

        calendarGrid.push(<tr key={i}>{row}</tr>)

    }

    return calendarGrid;

}