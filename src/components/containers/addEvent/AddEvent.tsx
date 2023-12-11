import { useContext } from "react";

import { DataContext } from "../../../context/Context";
import { Event } from "../../../shared/interfaces/event.interface";

import AddEventView from "../../views/addEvent/AddEvent";

const handleSubmit = (e: React.FormEvent, addEvent: (event: Event) => void) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const userEvent = Object.fromEntries(fd);
    console.log(userEvent);
    addEvent({
        season: Number(userEvent.season),
        status: String(userEvent.status),
        dateVenue: String(userEvent.date),
        timeVenueUTC: String(userEvent.time),
        originCompetitionName: String(userEvent.competition),
        stage: {
            name: String(userEvent.stage),
        },
        homeTeam: {
            name: String(userEvent['home-team'])
        },
        awayTeam: {
            name: String(userEvent['away-team']) 
        },
        result: {
            homeGoals: Number(userEvent['home-goals']),
            awayGoals: Number(userEvent['away-goals']),
        }
    })
};

export default function AddEvent() {
    const { addEvent } = useContext(DataContext);
    
    return <AddEventView handleSubmit={(e) => { handleSubmit(e, addEvent) }}/>;
};