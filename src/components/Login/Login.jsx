import "./Login.css";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/images/jobshub-logo.png";
import { Link } from "react-router-dom";

export default function Login() {
  const closeLogin = () => {
    const login = document.querySelector(".Login");
    login.classList.add("display-none");
  };

  const inputs = document.querySelectorAll(".input");

  const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    const label = target.parentElement;
    span.classList.add("login-span");
    label.classList.add("label-active");
  };

  const handleFocusOut = ({ target }) => {
    if (target.value === "") {
      const span = target.previousElementSibling;
      const label = target.parentElement;
      label.classList.remove("label-active");
      span.classList.remove("login-span");
    }
  };

  inputs.forEach((input) => input.addEventListener("focus", handleFocus));
  inputs.forEach((input) => input.addEventListener("focusout", handleFocusOut));

  // const labels = document.querySelectorAll("label");

  return (
    <div className="Login">
      <div className="login-box">
        <AiOutlineClose
          className="close-icon"
          id="close-icon"
          onClick={closeLogin}
        />
        <img src={logo} alt="Logo of the JobsHub" />
        <h1>Entrar</h1>
        <div className="login-inputs">
          <label htmlFor="email" className="">
            {/* <span className="">Email</span> */}
            <input
              type="email"
              id="email"
              className="input"
              placeholder="Email"
            />
          </label>
          <label htmlFor="email" className="">
            {/* <span className="">Senha</span> */}
            <input
              type="password"
              id="password"
              className="input"
              placeholder="Senha"
            />
          </label>
          <Link to="/" className="pass">
            Esqueceu a senha?
          </Link>
          <button type="submit" className="btnSubmit">
            Entrar
          </button>
          <span className="teste">
            Não tem uma conta?{" "}
            <Link to="/" className="sla">
              Cadastre-se
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
