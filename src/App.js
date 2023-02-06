
import './App.css';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Listado from './components/Listado';
import Header from './components/Header';
import Footer from './components/Footer';
import './css/bootstrap.min.css'
import Detalle from './components/Detalle';

function App() {
  return (

    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/listado" element={<Listado />} />
        <Route path="/detalle" element={<Detalle />} />

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
