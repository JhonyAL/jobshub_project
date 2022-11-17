import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/jobshub-logo.png";
import { FaUserCircle } from "react-icons/fa";
import Login from "../Login/Login";
import perfilIcon from "../../assets/images/perfil-icon.png";
import { useState } from "react";

export default function Navbar() {
  const [login, setLogin] = useState(false);

  const loginOpen = () => {
    console.log("Chegou");
    setLogin(!login);
  };

  return (
    <nav className="navbar" id="navbar">
      {login ? <Login /> : <div></div>}

      <div className="navbar-left">
        <div className="items">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="JobsHub logo" />
            </Link>
          </div>
          <div clasName="item-div">
            <Link to="/">
              Página Inicial
            </Link>
          </div>
          <div clasName="item-div">
            <Link to="/categoria">
              Categoria
            </Link>
          </div>
          <div clasName="item-div">
            <Link to="/contato">
              Contato
            </Link>
          </div>
          <div clasName="item-div">
            <Link to="/sobre">
              Sobre
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar-right" onClick={() => loginOpen()}>
        <p>Lucca Vinicius</p>
        <img src={perfilIcon} alt="" className="perfil-icon" />
      </div>
    </nav>
  );
}
