import { Views } from "../../../shared/types/views.type"

export default function Nav({ view, setView }: { view: Views, setView: React.Dispatch<React.SetStateAction<Views>> }) {
    
    const ActiveClass = "w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 md:text-xl";
    const InactiveClass = "w-full bg-gray-100 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 md:text-xl";
    
    return <>
        <nav className="w-full">
            <ul className="flex flex-row text-center">
                <li className="basis-1/2" onClick={ () => setView('calendar') }>
                    <button className={ view === 'calendar' ? ActiveClass : InactiveClass }>Calendar</button>
                </li>
                <li className="basis-1/2" onClick={ () => setView('add-event') }>
                    <button className={ view === 'add-event' ? ActiveClass : InactiveClass }>Add event</button>
                </li>
            </ul>
        </nav>
    </>
};