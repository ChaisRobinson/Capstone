import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Api from "./pages/Api";
import Footer from "./components/Footer";





function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery  />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/api" element={<Api />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
