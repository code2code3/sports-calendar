import './App.css';

import { DataContext } from './context/Context';
import Child from './components/Child';
import useInitDataContext from './context/useInitDataContext';

function App() {

  const initialDataContext = useInitDataContext();

  return (
    <>
      <DataContext.Provider value={initialDataContext}>
        <Child/>
      </DataContext.Provider>
    </>
  )
}

export default App;
