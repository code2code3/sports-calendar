import { useState } from 'react';

interface Props {
    handleSubmit: (event: React.FormEvent) => void,
}

export default function addEventView({ handleSubmit }: Props) {
    const [statusIsPlayed, setStatusIsPlayed] = useState(false);
    const [seasonValue, setSeasonValue] = useState(new Date().getFullYear().toFixed()) 
    
    return <>
        <form onSubmit={ handleSubmit }>

            <label htmlFor="home-team">Home team name: </label>
            <input type="text" id="home-team" name="home-team" required={statusIsPlayed ? true : false}/><br/>
            
            <label htmlFor="away-team">Away team name: </label>
            <input type="text" id="away-team" name="away-team" required={statusIsPlayed ? true : false}/><br/>

            <label htmlFor="time">Start time: </label>
            <input type="time" id="time" name="time" required/><br/>

            <label htmlFor="date">Date: </label>
            <input type="date" id="date" name="date" required/><br/>  

            <label htmlFor="season">Season: </label>
            <input type="number" id="season" name="season" min="2000" max="2099" step="1" value={seasonValue} onChange={(e) => setSeasonValue(e.target.value)} required/>

            <label htmlFor="competition">Competition: </label>
            <input type="text" id="competition" name="competition" required/><br/>

            <label htmlFor="stage">Stage: </label>
            <input type="text" id="stage" name="stage"/><br/>
  
        
            <label htmlFor="status">Status: </label>
            <select name="status" id="status" onChange={ (e)=> { if (e.target.value === "played") setStatusIsPlayed(true) } }>
                <option value="scheduled">Scheduled</option>
                <option value="played">Played</option>
            </select><br/> 

            { statusIsPlayed && <>
                <label htmlFor="home-goals">Home goals: </label>
                <input type="number" id="home-goals" name="home-goals" required/><br/>
    
                <label htmlFor="away-goals">Away goals: </label>
                <input type="number" id="away-goals" name="away-goals" required/><br/>    
            </> }

            <button type="submit">Add event</button>

        </form>
    </>;
};