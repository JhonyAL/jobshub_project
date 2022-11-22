import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import logo from "../../../assets/images/jobshub-logo.png"
import perfilIcon from "../../../assets/images/perfil-icon.png"

export default function Left() {
  return (
      <div className="navbarLeft">
          <div className="logo">
              <Link to='/'>
                  <img src={logo} alt="Logo JobsHub's"/>
              </Link>
          </div>
          <Navgation />
      </div>
  )
}

function Navgation() {
  return (
      <div className="navgationBar">
          <ul className="navItems">
            <li>
              <Link to="/">
                Página Inicial
              </Link>
            </li>
            <li>
              <Link to="/categoria">
                Categoria
              </Link>
            </li>
            <li>
              <Link to="/contato">
                Contato
              </Link>
            </li>
            <li>
              <Link to="/sobre">
                Sobre
              </Link>
            </li>
          </ul>
      </div>
  )
}