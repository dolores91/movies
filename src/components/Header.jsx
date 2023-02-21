import React from 'react'
import { Link } from 'react-router-dom'
import Buscador from './Buscador'

export default function Header(props) {
  return (
    <header style={{ backgroundColor: "#585178" }}>
      <nav className="navbar navbar-expand-lg me-5 "  >
        <ul className="container-fluid">
          <li className="navbar-brand fs-2"><Link className='text-decoration-none ms-5' to="/">Home </Link></li>
          <li className="nav-link active fs-2 text-decoration-none"><Link className='text-decoration-none' to="/listado">Listado </Link></li>
          <li className="nav-link active fs-2 text-decoration-none"><Link className='text-decoration-none' to="/favoritos">Favoritos </Link></li>
          <li className="nav-link active  ">Peliculas en favoritos: {props.favorites.length}</li>
          <li className="nav-link active mt-2 "><Buscador></Buscador></li>
        </ul>
      </nav>
    </header>
  )
}
