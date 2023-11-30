import { useState } from 'react';

import { Event } from '../shared/interfaces/event.interface';

import initialData from './data/sportData.json';

export default function useInitDataContext() {

    const [ data, setData ] = useState<Event[]>(initialData.data);

    const addEvent = (event: Event) => {
        setData(prevState => {
            return [...prevState, event];
        })
    };

    return {
        data,
        addEvent
    };
}