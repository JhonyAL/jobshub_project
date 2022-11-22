import React, { useState, useEffect } from "react"

import "./index.css"

import Top from './Top'
import Bottom from './Bottom'

export default function Navbar() {

    return (
      <nav className="navbar">
        <div className="top">
          <Top className="top"/>
        </div>
        <div className="bottom">
          <Bottom/>
        </div>
      </nav>
    )
  }