import React, { useEffect, useState } from 'react';
import { useNavigate, Link, Navigate } from "react-router-dom";
import axios from "axios";
import "../css/style.css"
import swal from '@sweetalert/with-react'

const Listado = () => {
   // const navigate = useNavigate();
    // SEGURIDADERUTAS FORMA 1 el use effect verifica, al montarse el componente, si el usuario está logueado, sino redirige automaticamente al login
    /*useEffect(() => {
        const token = localStorage.getItem("token")
        console.log(token);
        if (token === null) {
            navigate("/")
        }
    }, []);*/
    let token = sessionStorage.getItem("token")

    //API:
    const API = 'https://api.themoviedb.org/3/discover/movie?api_key=6059216fb415c21feabd30ee81b69d48&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'

    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(API).then((response) => {
            setPost(response.data.results);
        })
            .catch(error => {
                swal(<h2>El llamado a la API tiene errorres, intenta más tarde</h2>)
            });
    }, [setPost]);

    if (!post) return null;
    console.log(post);


    return (<>
        {/*SEGURIDADERUTAS FORMA 2: renderizado condicional con Navigate propiedad replace (la ventajaa es que no renderizsa todo de nuevo*/}
        {!token && <Navigate replace to="/" />}
        <div className='row'  style={{ backgroundColor: "#589DBE" }}>
            {/*RENDERIZADO con MAP*/}
            {
                post.map((oneMovie, i) => {
                    return (

                        <div className='col-3' key={i} >
                            <div className='card'>
                                <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt=".."></img>
                                <div className="card-body">
                                    <h5 className="card-title">{oneMovie.title.substring(0, 50)}</h5>
                                    <p className="card-text">{oneMovie.overview.substring(0, 120).concat("...")}</p>
                                    <Link to={`/detalle?MovieID=${oneMovie.id}`} className="btn btn-primary">Ver más</Link>
                                </div></div>
                        </div>
                    )
                })
            }</div></>

    );
}

export default Listado;

