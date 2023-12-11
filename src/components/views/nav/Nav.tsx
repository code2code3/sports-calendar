import { Views } from "../../../shared/types/views.type"

export default function Nav({ setView }: { setView: React.Dispatch<React.SetStateAction<Views>> }) {
    return <>
        <nav>
            <ul>
                <li onClick={ () => setView('calendar') }>Calendar</li>
                <li onClick={ () => setView('add-event') }>Add event</li>
            </ul>
        </nav>
    </>
};