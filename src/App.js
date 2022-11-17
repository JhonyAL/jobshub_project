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

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Sobre from "./components/js/Sobre";
import Login from "./components/Login/Login";
import Chat from "./components/Chat/Chat";
import { BsFillChatDotsFill } from "react-icons/bs";

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
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/login" element={<Login />} />
            <Route path="/conversas" element={<Chat />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}