import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import Notfound from "./pages/Notfound";

export default function App() {
  return (
    <div>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/*" element={<Notfound />} />

        </Routes>
      </div>
    </div>
  );
}
