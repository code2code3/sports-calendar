import './App.css';
import { DataContext } from './context/Context';
import useInitDataContext from './context/useInitDataContext';

import Calendar from './components/containers/calendar/Calendar';
import AddEvent from './components/containers/addEvent/AddEvent';

function App() {

  const initialDataContext = useInitDataContext();

  return (
    <>
      <DataContext.Provider value={initialDataContext}>
        <Calendar/>
      </DataContext.Provider>
    </>
  )
}

export default App;
