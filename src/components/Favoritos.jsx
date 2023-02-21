import React, {useState, useEffect} from 'react';
import { useNavigate, Link, Navigate } from "react-router-dom";

const Favoritos = (props) => {

    let token = sessionStorage.getItem("token")

    return (
        <div style={{ backgroundColor: "#589DBE" }}>
            <h2 className='ps-3 pt-5 py-5'>Seccion de favoritos</h2>
            {!props.favorites.length&& <h3 className="ps-3 pt-5 py-5">No tenes películas en favoritos <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></h3>
            
            }


            <div className='row mx-2'  >
            {!token && <Navigate replace to="/" />}
            {/*RENDERIZADO con MAP*/}
            {
                props.favorites.map((oneMovie, i) => {
                    return (

                        <div className='col-3 mt-3 my-5' key={i} >
                            <div className='card'>
                                <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.imgUrl}`} className="card-img-top" alt=".."></img>
                                <button className='favorite-btn'
                               onClick={props.isFav}
                                data-movie-id={oneMovie.id}>🖤</button>
                                <div className="card-body">
                                    <h5 className="card-title">{oneMovie.title}</h5>
                                    <p className="card-text">{oneMovie.overview}</p>
                                    
                                </div></div>
                        </div>
                    )
                })
            }</div>
           
            
        </div>
    );
}

export default Favoritos;
