import React, {useState, useEffect} from 'react';

const Favoritos = () => {
    const [favorites, setfavorites] = useState([]);
    useEffect(() => {
        
        const favsInLocal = localStorage.getItem("favs")
        if (favsInLocal !==null) {
            const favsArray = JSON.parse(favsInLocal);
            setfavorites(favsArray);
            console.log(favorites);
        }
    }, []);


    return (
        <div>
            <h2 className='ms-3 mt-5 my-5'>Seccion de favoritos</h2>


            <div className='row mx-2'  >
            {/*RENDERIZADO con MAP*/}
            {
                favorites.map((oneMovie, i) => {
                    return (

                        <div className='col-3 mt-3 my-5' key={i} >
                            <div className='card'>
                                <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.imgUrl}`} className="card-img-top" alt=".."></img>
                                <button className='favorite-btn'
                               
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
