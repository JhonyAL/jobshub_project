import React, { useState, useEffect } from "react"
import { FaBars } from 'react-icons/fa'
import { Link } from "react-router-dom"

import './index.css'

export default function Bottom() {
    const [items, setItems] = useState([
        
    ])

    const sla = ['Sobre', 'Contatos', 'Promoções', 'Agenda']

    return (
        <div className="navbarBottom">
            <div className="content">
                {sla.map((e, key) => {
                    <p key="key">{e}</p>
                })}
                {/* <Link to="/sobre">
                    <p>Sobre</p>
                </Link>
                <Link to="/contatos">
                    <p>Contatos</p>
                </Link>
                <Link to="/promocoes">
                    <p>Promoções</p>
                </Link>
                <Link to="/agenda">
                    <p>Agenda</p>
                </Link> */}
            </div>
        </div>
    )
}