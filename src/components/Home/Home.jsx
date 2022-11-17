import "./Home.css";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import Login from "../Login/Login";
import lucca from "../../assets/images/perfil-icon.png";
import miya from "../../assets/images/miyashiro.png";
import mito from "../../assets/images/mito.png";
import lula from "../../assets/images/lula.png";
import { AiFillStar } from "react-icons/ai";

export default function Home() {
  return (
    <div className="Home">
      <section className="search-section">
        <div className="search-content">
          <div className="title">
            <h1>
              Pesquise por sua região para encontrar trabalhadores próximos
            </h1>
          </div>
          <label className="search-input" for="search">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Ex: São Paulo..."
            />
            <p>
              <BiSearch />
            </p>
          </label>
        </div>
      </section>
      <section className="cards">
        <h1>De sua preferência</h1>
        <div className="card-content">
          <div className="card">
            <img src={lucca} alt="" />
            <p>Lucca Vinicius</p>
            <p>Profissão: Dev Front-end júnior</p>
            <div className="avaliation">
              <AiFillStar className="avaliation-true"/>
              <AiFillStar className="avaliation-true"/>
              <AiFillStar className="avaliation-true"/>
              <AiFillStar className="avaliation-true"/>
              <AiFillStar className="avaliation-false"/>
            </div>
            <span>Olá pessoal! Eu me chamo Lucca e sou um desenvolvedor front-end tentando escalar a montanha da vida, mas, infelizmente eu provavelmente irei fracassar...</span>
          </div>
          <div className="card">
            <img src={miya} alt="" />
            <p>Gustavo Miyashiro</p>
            <p>Profissão: Agiota</p>
            <div className="avaliation">
              <AiFillStar className="avaliation-true"/>
              <AiFillStar className="avaliation-true"/>
              <AiFillStar className="avaliation-false"/>
              <AiFillStar className="avaliation-false"/>
              <AiFillStar className="avaliation-false"/>
            </div>
            <span>Iae, tudo bem? Eu sou um japnonês fugitivo da Yakuza em busca de emprego, me ajudem a pagar a comida da minha esposa Juriscrelda. Ah sim, se não me pagarem, é um dedo fora...</span>
          </div>
          <div className="card">
            <img src={lula} alt="" />
            <p>Luiz Inacio Lula da Silva</p>
            <p>Profissão: Empreendedor</p>
            <div className="avaliation">
              <AiFillStar className="avaliation-true"/>
              <AiFillStar className="avaliation-true"/>
              <AiFillStar className="avaliation-true"/>
              <AiFillStar className="avaliation-true"/>
              <AiFillStar className="avaliation-false"/>
            </div>
            <span>Companheiros e companheiras, me ajudem a comer a pipa de cada dia. Eu estou sem um dedo, porque fiquei devendo um agiota japonês maldoso, então, por favor, me ajudem!</span>
          </div>
          <div className="card">
            <img src={mito} alt="" />
            <p>Jair Mito Bolsonaro</p>
            <p>Profissão: Dev Front-end senior</p>
            <div className="avaliation">
              <AiFillStar className="avaliation-true"/>
              <AiFillStar className="avaliation-true"/>
              <AiFillStar className="avaliation-true"/>
              <AiFillStar className="avaliation-true"/>
              <AiFillStar className="avaliation-true"/>
            </div>
            <span>Eu sou o melhor da área de TI, tá okay?</span>
          </div>
        </div>
      </section>
    </div>
  );
}
