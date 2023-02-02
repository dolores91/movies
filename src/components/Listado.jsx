import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Listado = () => {
    const navigate = useNavigate();
//el use efect se usa para verificar, al montarse el componente, si el usuario está logueado, sino redirige automaticamente al login
    useEffect(() => {
        const token = localStorage.getItem("token")
        console.log(token);
        if (token === null) {
            navigate("/")
        }
    }, []);

    return (

        <div>
            <p>listado</p>

        </div>
    );
}

export default Listado;

