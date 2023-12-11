import { Event } from "../../../shared/interfaces/event.interface";


const SingleEvent = ({ event }: { event: Event }) => {
    return <>
        <div className="flex justify-between">
            <span className="flex-1 w-16 text-right text:base md:text-xl">{ event.homeTeam?.name || "TBC"}</span> 
            <span className="flex-1 w-8 text-center text:base md:text-xl">{ event.status === 'played' 
                ? <>
                    <span>{ event.result?.homeGoals }</span>
                    <span> : </span>
                    <span>{ event.result?.awayGoals }</span>
                </> 
                : <>
                    <span>{ new Date(`${event.dateVenue}, ${event.timeVenueUTC}`).toLocaleTimeString('en-US', { hour12: false }).slice(0,-3)}</span>
                </> 
            }</span> 
            <span className="flex-1 w-16 text-left text:base md:text-xl">{ event.awayTeam?.name || "TBC" }</span>
        </div>
    </>
};

const Events = ({ events }: { events: Event[] }) => {

    const eventsSorted = events.sort((a,b) => new Date(`${a.dateVenue}, ${a.timeVenueUTC}`).getTime() - new Date(`${b.dateVenue}, ${b.timeVenueUTC}`).getTime());
    const competitions = [...new Set(events.map(event => event.originCompetitionName))];
    let stagesInCompetitions = competitions.map(competition => [...new Set(events.map((event) => { if (event.originCompetitionName === competition) return event.stage?.name}))]);

    let markup = [];
    
    for (let i=0; i<competitions.length; i++) {

        const eventsInCompetition = eventsSorted.filter(event => event.originCompetitionName === competitions[i])
        
        const competition = competitions[i];
        markup.push(<h2 className="font-bold text:lg md:text-3xl mb-1 md:mb-6">{competition}</h2>);

        const stages = stagesInCompetitions[i];
        let stagesSorted: (string | undefined)[] = [];
        if (stages.includes('')) {
            stagesSorted = stages.filter(item => (typeof item === 'string' && item !== ''));
            stagesSorted.unshift('');
        } else {
            stagesSorted = stages;
        }

        if (stagesSorted.length > 0) {
            stagesSorted.forEach((stage) => {
                markup.push(<h3 className="italic text:base md:text-xl mb-5">{stage}</h3>);
                const eventsInStage = eventsInCompetition.filter(event => event.stage?.name === stage);
                eventsInStage.forEach((event) => {
                    markup.push(<SingleEvent event={event}/>);
                });
            })
        } else {
            eventsInCompetition.forEach((event) => {
                markup.push(<SingleEvent event={event}/>);
            });
        };  
    }

    return markup;

}

interface Props {
    events: Event[],
    exitEventsView: () => void,
    selectedDate: Date
}

export default function EventsList({ events, exitEventsView, selectedDate }: Props) {
    
    return <>
    <div className="mt-1 mb-2">
        <button 
            className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded md:text-lg md:mb-6"
            onClick={ exitEventsView }
        >
            &lt; Return to calendar view
        </button>
    </div>
        <div className="mb-2">
            <h2 className="text:base md:text-xl md:mb-4">Events scheduled for {<span className="font-bold">{selectedDate.toDateString()}</span>}</h2>
        </div>
        { events.length > 0 
            ? <Events events={events}/>
            : <div>
                <span className="text:base md:text-xl md:mb-4">No events scheduled</span>
            </div>
        }
    </>
}