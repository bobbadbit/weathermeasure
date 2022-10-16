import './App.css';
import Table from 'rc-table';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Overview from './Screens/Overview';
import Details from './Screens/Details';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path = '/Overview' element = {<Overview/>}/>
        <Route path = '/Details' element = {<Details/>}/>
      </Routes>
    </BrowserRouter>
  );

}

export default App;


