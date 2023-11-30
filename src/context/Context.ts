import { createContext } from 'react';

import { Event } from '../shared/interfaces/event.interface';

const DataContext = createContext({
    data: [] as Event[],
    addEvent: (event: Event) => {},
});

export { DataContext };