import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" >
            <ul className="container-fluid">
                <li className="navbar-brand"><Link to="/">Home </Link></li>
                <li className="nav-link active"><Link to="/listado">Listado </Link></li>
                <li className="nav-link active"><Link to="/contacto">Contacto </Link></li>
            </ul>
        </nav>
    </header>
  )
}
