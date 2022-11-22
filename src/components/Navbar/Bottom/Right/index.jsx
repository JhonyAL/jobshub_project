import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

export default function Right() {
    
    return (
        <div className="navbarRight">
            <button><Link to="/login">Entrar</Link></button>
        </div>
    )

}