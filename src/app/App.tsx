import { useEffect, useContext } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import About from "../pages/About/About";
import Snow from "../pages/Snow/Snow";
import Forecast from "../pages/Forecast/Forecast";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/snow-condition" element={<Snow />} />
        <Route path="/forecast" element={<Forecast />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
