import React, { useState, useEffect } from 'react';
import swal from '@sweetalert/with-react'
import axios from "axios";
import { useNavigate, Link, Navigate } from "react-router-dom";

const Resultados = (props) => {
    let token = sessionStorage.getItem("token")

    const navigate = useNavigate();
    //IDENTIFICARKEYWORDENURL 
    let query = new URLSearchParams(window.location.search)
    //separar keyword de toda la URL
    let keyword = query.get("keyword");
    console.log(keyword);

    //API 
    const API = `https://api.themoviedb.org/3/search/movie?api_key=6059216fb415c21feabd30ee81b69d48&language=en-US&query=${keyword}`
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(API).then((response) => {
            setPost(response.data.results);
            //console.log(response.data.results);
            if (post.length===0) {
                swal(<h2>Tu búsqueda no arrojó resultados</h2>)
                navigate("/listado")
            }
        })
            .catch(error => {
                swal(<h2>El llamado a la API tiene errorres, intenta más tarde</h2>)
            });
    }, [keyword]);

    if (!post) return null;
    //console.log(post);

    return (
        <div style={{ backgroundColor: "#589DBE" }}>
        {!token && <Navigate replace to="/" />}
         <div className='row mx-1'  >
            <h2 className='my-3'>Resultados de <em>{keyword}</em>:</h2>
            {
                post.map((oneFilm, i) => {
                    return (
                        <div className='col-3 mb-3' key={i} >
                            <div className='card'>
                                <img src={`https://image.tmdb.org/t/p/w500/${oneFilm.backdrop_path}`} className="card-img-top" alt=".."></img>
                                <div className="card-body">
                                <button className='favorite-btn'
                               onClick={props.isFav}
                                data-movie-id={oneFilm.id}>🖤</button>
                                    <h5 className="card-title">{oneFilm.title.substring(0, 50)}</h5>
                                    <p className="card-text">{oneFilm.overview.substring(0, 70).concat("...")}</p>
                                    <Link to={`/detalle?MovieID=${oneFilm.id}`} className="btn btn-primary">Ver más</Link>
                                </div></div>
                        </div>
                    )
                })
            }
</div>
        </div>
    );
}

export default Resultados;
