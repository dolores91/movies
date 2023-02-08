import React from 'react'
import { Link } from 'react-router-dom'
import Buscador from './Buscador'

export default function Header() {
  return (
    <header style={{ backgroundColor: "#585178" }}>
      <nav className="navbar navbar-expand-lg "  >
        <ul className="container-fluid">
          <li className="navbar-brand"><Link to="/">Home </Link></li>
          <li className="nav-link active"><Link to="/listado">Listado </Link></li>
          <li className="nav-link active"><Buscador></Buscador></li>
        </ul>
      </nav>
    </header>
  )
}
