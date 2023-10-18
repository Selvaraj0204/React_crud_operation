import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpDetails from './EmpDetails';
import EmpEdit from './EmpEdit';

function App() {
  return (
    <div className="App">
      <h2 style={{marginBottom:"30px",color:"white"}}>React crud operation</h2>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing/>}/>
          <Route path='/employee/create' element={<EmpCreate/>}/>
          <Route path='/employee/details/:empid' element={<EmpDetails/>}/>
          <Route path='/employee/edit/:empid' element={<EmpEdit/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
