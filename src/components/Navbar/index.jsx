import React, { Component, useState } from "react"
import { Link } from "react-router-dom"
import { FaUserCircle } from "react-icons/fa"

import "./index.css"

import logo from "../../assets/images/jobshub-logo.png"
import perfilIcon from "../../assets/images/perfil-icon.png"

import Login from '../Login'
import LoginOpen from './LoginOpen'
import Left from './Left'
import Right from './Right'
import Center from "./Center"

class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  // const [login, setLogin] = useState(false);

  // const loginOpen = () => {
  //   console.log("Chegou");
  //   setLogin(!login);
  // };
  // {/*onClick=>() => loginOpen()*/}

  render() {
    return (
      <nav className="navbar">
        <Left />
        <Center />
        <Right />
      </nav>

    //   <nav className="navbar" id="navbar">
    //   {login ? <Login /> : <div></div>}
    //     <div className="navbar-left">
    //     <div className="items">
    //       <div className="logo">
    //         <Link to="/">
    //           <img src={logo} alt="JobsHub logo" />
    //         </Link>
    //       </div>
    //       <div clasName="item-div">
    //         <Link to="/">
    //           Página Inicial
    //         </Link>
    //       </div>
    //       <div clasName="item-div">
    //         <Link to="/categoria">
    //           Categoria
    //         </Link>
    //       </div>
    //       <div clasName="item-div">
    //         <Link to="/contato">
    //           Contato
    //         </Link>
    //       </div>
    //       <div clasName="item-div">
    //         <Link to="/sobre">
    //           Sobre
    //         </Link>
    //       </div>
    //     </div>
    //     </div>
    //   <div className="navbar-right">
    //     <p>Lucca Vinicius</p>
    //     <img src={perfilIcon} alt="" className="perfil-icon" />
    //   </div>
    // </nav>
    )
  }
}

export default Navbar