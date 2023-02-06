import React from 'react'
import axios from 'axios'
import swal from '@sweetalert/with-react'
import { useNavigate, Navigate } from "react-router-dom";
import "../css/bootstrap.min.css"

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
let token = localStorage.getItem("token")
//EN este caso el renderizado condicional se hace xq no tiene sentido volver a loguearse cuando ya tiene token.
    return (
        <>
        {token && <Navigate replace to="/listado"/>}
        <div className="p-3 mb-2 bg-warning-subtle text-emphasis-warning">
            <h2>Formulario de login</h2>
            <form className="mb-3" onSubmit={handleSubmit} >
                <label className="form-label"> E-mail
                    <input className="form-control" type="mail" name='email'></input>
                </label>
                <label className="form-label">Contraseña
                    <input className="form-control" type="password" name='password'></input>
                </label>
                <button className="btn btn-info" type='submit'>Ingresar</button>
            </form>
        </div></>
    )
}

export default Login
    
