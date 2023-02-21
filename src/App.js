import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Listado from './components/Listado';
import Header from './components/Header';
import Footer from './components/Footer';
import './css/bootstrap.min.css'
import Detalle from './components/Detalle';
import Resultados from './components/Resultados';
import Favoritos from './components/Favoritos';


function App() {
  const [favorites, setfavorites] = useState([]);
  useEffect(() => {

    const favsInLocal = localStorage.getItem("favs")
    if (favsInLocal !== null) {
      const favsArray = JSON.parse(favsInLocal);
      setfavorites(favsArray);
      console.log(favorites);
    }
  }, []);
  //para usar lo q tengo en local en la pag de favoritos->
  const isFav = (e) => {
    const favMovies = localStorage.getItem("favs")
    let tempFavMovies
    if (favMovies === null) {
      tempFavMovies = []
    } else {
      tempFavMovies = JSON.parse(favMovies)
    }

    const btn = e.currentTarget
    const parent = btn.parentElement; //PARA OBTENER EL DIV PADRE DENTRO DEL MAP
    const imgUrl = parent.querySelector("img").getAttribute("src") //capturar los datos->
    const title = parent.querySelector("h5").innerText;
    const overview = parent.querySelector("p").innerText;
    const movieData = { //armo un nuevo objeto 
      imgUrl, title, overview, id: btn.dataset["movieId"]
    }
    //para no cargar una que ya esta en fav:
    let movieIsInFav = tempFavMovies.find(oneMovie => {
      return oneMovie.id === movieData.id
    })
    if (!movieIsInFav) {
      tempFavMovies.push(movieData)
      console.log(tempFavMovies);
      localStorage.setItem("favs", JSON.stringify(tempFavMovies))
      setfavorites(tempFavMovies)
      console.log("se agrego la palicula");
      console.log("fav: ", tempFavMovies);
    } else { //para eliminarlas cuando vuelven a hacer click
      let movieLeft = tempFavMovies.filter(oneMovie => {
        return oneMovie.id !== movieData.id
      })
      localStorage.setItem("favs", JSON.stringify(movieLeft))
      setfavorites(movieLeft)
      console.log("se eliminó la pelicula");
      console.log("left", movieLeft);
    }
  }

  return (

    <div className="App">
      <Header favorites={favorites}/>
      <Routes>
        <Route path="/" element={<Login />} />
        {/*} <Route path="/listado" render={(props)=><Listado isFav={isFav} {...props} />} /> 
       <Route path="/listado" element={<Listado isFav={isFav}  />}/>*/}
        <Route path="/listado" element={<Listado isFav={isFav} />} />
        <Route path="/detalle" element={<Detalle />} />
        <Route path="/resultados" element={<Resultados isFav={isFav} favorites={favorites} />} />
        <Route path="/favoritos" element={<Favoritos isFav={isFav} favorites={favorites} />} />



      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
