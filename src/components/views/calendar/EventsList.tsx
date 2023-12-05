import { Event } from "../../../shared/interfaces/event.interface";

interface Props {
   events: Event[],
   exitEventsView: () => void,
   selectedDate: Date
}

const Events = ({ events }: { events: Event[] }) => {
    const competitions = [...new Set(events.map(event => event.originCompetitionName))];
    const rounds = competitions.map(competition => [...new Set(events.map(event => event.stage?.name))]);
    const eventsSorted = events.sort((a,b) => new Date(`${a.dateVenue}, ${a.timeVenueUTC}`).getTime() - new Date(`${b.dateVenue}, ${b.timeVenueUTC}`).getTime());

    return(<>
        {competitions.map((competiton, index) => <div key={index}>
            <h2>{competiton}</h2>
            {rounds.map((round, index) => {
                return (<div key={index}>
                    <h3>{round}</h3>
                    {eventsSorted.map((event, index) => {
                        return(
                            <div key={index}>
                                <div>
                                    <span>{ event.homeTeam?.name ?? "TBC"}</span> 
                                    <span>{ event.status === 'played' 
                                        ? <>
                                            <span>{ event.result?.homeGoals }</span>
                                            <span> : </span>
                                            <span>{ event.result?.awayGoals }</span>
                                        </> 
                                        : <>
                                            <span>{ new Date(`${event.dateVenue}, ${event.timeVenueUTC}`).toLocaleTimeString('en-US', { hour12: false }).slice(0,-3)}</span>
                                        </> 
                                    }</span> 
                                    <span>{ event.awayTeam?.name ?? "TBC" }</span>
                                </div>
                            </div>
                        );
                    })}
                </div>);
            })}
        </div>)}  
    </>);
};

export default function EventsList({ events, exitEventsView, selectedDate }: Props) {
    
    return <>
        <button onClick={ exitEventsView }>Back to calendar view</button>
        <div>Events scheduled for { selectedDate.toDateString() }</div>
        { events.length > 0 
            ? <Events events={events}/>
            : <div>
                <span>No events</span>
            </div>
        }
    </>
}