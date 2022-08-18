import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import {BrowserRouter as Router ,Link, Route, Routes } from "react-router-dom";

function App() {


  const Home = () => {
    return <div>Home</div>
  }

  const NotFound = () => {
    return <div>NotFound!</div>
  }

  return (
    <Router>
      <div>
        <header className="w-full h-16 bg-sky-500 flex justify-around items-center	">
          <Link to="/">
            <h1 className="text-3xl text-white">LOGO</h1>
          </Link>
          <ul className="flex w-36 text-white justify-between">
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </header>

        <div>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact"t element={<Contact/>}/>
            <Route path="*"t element={<NotFound/>}/>
          </Routes>
        </div>
      
      </div>
    </Router>
  );
}

export default App;
