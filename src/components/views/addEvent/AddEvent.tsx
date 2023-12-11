import { useState } from 'react';

interface Props {
    handleSubmit: (event: React.FormEvent) => void,
}

export default function addEventView({ handleSubmit }: Props) {
    const [statusIsPlayed, setStatusIsPlayed] = useState(false);
    const [seasonValue, setSeasonValue] = useState(new Date().getFullYear().toFixed());
    
    const labelStyle = "block mb-2 text-sm md:text-base font-medium text-gray-900 dark:text-white";
    const inputStyle = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
    
    return <>
        <form onSubmit={ handleSubmit }>

            <div className='mb-1'>
                <label className={labelStyle} htmlFor="home-team">Home team name: </label>
                <input className={inputStyle} type="text" id="home-team" name="home-team" required={statusIsPlayed ? true : false}/><br/>
            </div>

            <div className='mb-1'>
                <label className={labelStyle} htmlFor="away-team">Away team name: </label>
                <input className={inputStyle} type="text" id="away-team" name="away-team" required={statusIsPlayed ? true : false}/><br/>
            </div>

            <div className='mb-1'>
                <label className={labelStyle} htmlFor="time">Start time: </label>
                <input className={inputStyle} type="time" id="time" name="time" required/><br/>
            </div>

            <div className='mb-1'>
                <label className={labelStyle} htmlFor="date">Date: </label>
                <input className={inputStyle} type="date" id="date" name="date" required/><br/>  
            </div>

            <div className='mb-1'>
                <label className={labelStyle} htmlFor="season">Season: </label>
                <input className={inputStyle} type="number" id="season" name="season" min="2000" max="2099" step="1" value={seasonValue} onChange={(e) => setSeasonValue(e.target.value)} required/><br/>
            </div>

            <div className='mb-1'>
                <label className={labelStyle} htmlFor="competition">Competition: </label>
                <input className={inputStyle} type="text" id="competition" name="competition" required/><br/>
            </div>

            <div className='mb-1'>
                <label className={labelStyle} htmlFor="stage">Stage: </label>
                <input className={inputStyle} type="text" id="stage" name="stage"/><br/>
            </div>
  
        
            <div className='mb-1'>
                <label className={labelStyle} htmlFor="status">Status: </label>
                <select className={inputStyle} name="status" id="status" onChange={ (e)=> { if (e.target.value === "played") setStatusIsPlayed(true) } }>
                    <option value="scheduled">Scheduled</option>
                    <option value="played">Played</option>
                </select><br/> 
            </div>

            { statusIsPlayed && <>
                <div className='mb-1'>
                    <label className={labelStyle} htmlFor="home-goals">Home goals: </label>
                    <input className={inputStyle} type="number" id="home-goals" name="home-goals" required/><br/>
                </div>

                <div className='mb-1'>
                    <label className={labelStyle} htmlFor="away-goals">Away goals: </label>
                    <input className={inputStyle} type="number" id="away-goals" name="away-goals" required/><br/>  
                </div>  
            </> }

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" type="submit">Add event</button>

        </form>
    </>;
};