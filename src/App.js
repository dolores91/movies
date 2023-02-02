
import './App.css';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Listado from './components/Listado';
import Header from './components/Header';
import Footer from './components/Footer';
import './css/bootstrap.min.css'

function App() {
  return (

    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/listado" element={<Listado />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
