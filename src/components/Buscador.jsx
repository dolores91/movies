import React from 'react';
import swal from '@sweetalert/with-react'
import { useNavigate, Link, Navigate } from "react-router-dom";


const Buscador = () => {
    const navigate = useNavigate();


    const handleSubmit = e => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value
        console.log(keyword)
        //evaluar que no envíen el formulario vacio o solo espacios en blanco ->
        if (keyword.trim() === "") {
            swal(<h2>Debes ingresar una palabra clave</h2>)
       }else{
        e.currentTarget.keyword.value = "" //Para dejar el imput en blanco
        navigate(`/resultados?keyword=${keyword}`)
       }
    }

    return (
        <form className='d-flex align-item-center' onSubmit={handleSubmit} >
            <label className='form-label mb-0'>
                <input className='form-control' type="text" name='keyword' placeholder='Buscar...'></input>
            </label>
            <button className='btn btn-success ml-2' type='submit'>Buscar</button>
        </form>
    );
}

export default Buscador;
