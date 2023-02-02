import React from 'react'
import axios from 'axios'
import swal from '@sweetalert/with-react'
import Listado from './Listado'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

const handleSubmit = (e) =>{
   

    e.preventDefault()
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const email = e.target.email.value
    const password = e.target.password.value
    //console.log(regexEmail.test(email));
    //console.log(email, password);
    if (email ===" " || password===" ") {
        swal(<h3>los campos no pueden quedar vacios</h3>)
    
    }
    if (!email === regexEmail.test(email) ) {
        swal(<h3>campos ingresados no validos</h3>)
       
        return
    }
    if (email !== "challenge@alkemy.org" || password !== "react") {
        swal(<h3>credenciales inválidas</h3>)
        return
    }
swal(<h2>Ingreso correcto</h2>)


//CONEXION CON AXIOS
axios.post("http://challenge-react.alkemy.org/",{email, password})
.then(res =>{
    console.log(res.data);
    //guardamos el token localmente:
    const token = res.data.token;
    localStorage.setItem("token", token);
    navigate("/listado")
    
})
}

    return (
        <>
            <h2>Formulario de login</h2>
            <form onSubmit={handleSubmit}>
                <label> E-mail
                    <input type="mail" name='email'></input>
                </label>
                <label>Contraseña
                    <input type="password" name='password'></input>
                </label>
                <button type='submit'>Ingresar</button>
            </form>
        </>
    )
}

export default Login
    
