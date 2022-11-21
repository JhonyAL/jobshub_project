import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import logo from "../../../assets/images/jobshub-logo.png"
import perfilIcon from "../../../assets/images/perfil-icon.png"

class Left extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
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
}

class Navgation extends Component {
    render() {
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
}

export default Left