import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoIosNotificationsOutline } from 'react-icons/io'

import './index.css'

import logo from "../../../assets/images/jobshub-logo.png"
import perfilIcon from "../../../assets/images/perfil-icon.png"

import UserPerfil from './UserPerfil'
import Search from './Search'

export default function Left() {
    const [loginCookie, setLoginCookie] = useState(false)

    const verificationLogin = () => {
        if (loginCookie) {
            return <UserPerfil image={perfilIcon}/>
        }
        return <button className='btnLogin'>Entrar</button>
    }

    return (
        <div className="navbarTop">
            <div className="left">
                <Search/>
            </div>
            <div className="logo">
                <Link to='/'>
                    <img src={logo} alt="Logo JobsHub's"/>
                </Link>
            </div>
            <div className="right">
                {verificationLogin()}
            </div>
        </div>
    )
}