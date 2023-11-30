import { useContext } from 'react';

import { DataContext } from '../context/Context';

export default function Child() {

    const { data, addEvent } = useContext(DataContext);

    return <>
        <button onClick={ () => { 
            addEvent({ 
                season: 2023,
                status: "scheduled",
                dateVenue: "test",
                homeTeam: { name: "test" },
                awayTeam: null,
                originCompetitionName: "test",
                result: {
                    homeGoals: 1,
                    awayGoals: 2
                },
            }) 
        } }>Add Event</button>
        <div>
            {data.map(({ season, status, dateVenue }, index) => {
                return <div key={index}>
                    <span>{season}</span>, <span>{dateVenue}</span>,  <span>{status}</span>
                </div>
            })}
        </div>
    </>

}