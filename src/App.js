import React, { Component } from 'react'

import "./App.css";
import {
  createBrowserRouter,
  BrowserRouter as Router,
  RouterProvider,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { CiSearch } from "react-icons";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Sobre from "./components/js/Sobre";
import Login from "./components/Login";
import Chat from "./components/Chat";
import { BsFillChatDotsFill } from "react-icons/bs";

class App extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
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
              {/* <Route path="/sobre" element={<Sobre />} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/conversas" element={<Chat />} />
            </Routes>
          </main>
        </Router>
      </div>
    )
  }
}

export default App