import React, { useEffect, useState } from 'react';

import { Navigate } from "react-router-dom";
import axios from "axios";
import swal from '@sweetalert/with-react'



const Detalle = () => {
    let token = sessionStorage.getItem("token")
    console.log(token);

    //IDENTIFICARIDENURL 
    let query = new URLSearchParams(window.location.search)
    //separar el ID de toda la URL
    let MovieID = query.get("MovieID");

    //API:
    const API = `https://api.themoviedb.org/3/movie/${MovieID}?api_key=6059216fb415c21feabd30ee81b69d48&language=es-ES`

    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(API).then((response) => {
            setPost(response.data);
            console.log(MovieID);
            console.log(response.data);
        })
            .catch(error => {
                swal(<h2>El llamado a la API tiene errorres, intenta más tarde</h2>)
            });
    }, [MovieID]);

    if (!post) return null;
    console.log(post);

    const genres = post.genres


    return (
        <div style={{ backgroundColor: "#589DBE" }}>
        <div className='container-sm' >
            {/*LOGIN ? ->*/}
            {!token && <Navigate replace to="/" />}
            {/*MOVIE existe ? -> */}
            {!post && <h2>Cargando contenido..</h2>}
            {post && (
                <>
                    <h2>                Detalle de la película            </h2>
                    <div className='row'>
                        <h5>Título: {post.original_title}</h5>
                        <div className='col-4'><img src={`https://image.tmdb.org/t/p/w500/${post.poster_path}`} className="card-img-top" alt=".."></img></div>
                        <div className='col-8'>


                            <h5>Géneros: </h5>
                            {
                                genres.map((oneGenre, i) => {
                                    return (
                                        <div className='col-3' key={i} >
                                            <li className="card-text">{oneGenre.name}</li>
                                        </div>
                                    )
                                })
                            }

                            <h5>Reseña: </h5>
                            <p>{post.overview}</p>
                            <h6>Presupuesto: ${post.budget}</h6>
                            <h6>Lanzamiento: {post.release_date}</h6>


                        </div>



                    </div>
                </>
            )}
            <br></br>
        </div>
        </div>
    );
}

export default Detalle;
