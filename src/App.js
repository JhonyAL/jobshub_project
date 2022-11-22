import React, { useState, useEffect } from 'react'
import {
  createBrowserRouter,
  BrowserRouter as Router,
  RouterProvider,
  Routes,
  Route,
  Link,
} from "react-router-dom"
import { CiSearch } from "react-icons"
import { BsFillChatDotsFill } from "react-icons/bs"

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Login from "./components/Login";
import Chat from "./components/Chat";

export default function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Navbar />
        </header>
        <Link to="/conversas"><BsFillChatDotsFill className="chat-icon" /></Link>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/conversas" element={<Chat />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}