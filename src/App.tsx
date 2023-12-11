import './App.css';
import { useState } from 'react'
import { DataContext } from './context/Context';
import useInitDataContext from './context/useInitDataContext';

import { Views } from './shared/types/views.type';

import Calendar from './components/containers/calendar/Calendar';
import AddEvent from './components/containers/addEvent/AddEvent';
import Navigation from './components/views/nav/Nav';


const MainView = ({ view }: { view: Views }) => {
  switch(view) {
    case 'calendar':
      return <Calendar/>
      break;
    case 'add-event':
      return <AddEvent/>
      break;
  }
};

function App() {

  const initialDataContext = useInitDataContext();
  const [view, setView] = useState<Views>('calendar');

  return (
    <>
      <DataContext.Provider value={initialDataContext}>
        <Navigation setView={setView}/>
        <MainView view={view}/>
      </DataContext.Provider>
    </>
  )
}

export default App;
