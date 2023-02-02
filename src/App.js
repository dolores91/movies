
import './App.css';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Listado from './components/Listado';

function App() {
  return (
    
    <div className="App">
  <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/listado" element={<Listado/>} />
           
          </Routes>
    </div>
  );
}

export default App;
