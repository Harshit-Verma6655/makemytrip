import { useState } from "react";


import Home from "./Pages/Home";
import Flightfilter from "./Pages/Flightfilter";
import FlightCard from "./components/FlightCard";
import { Route, Routes } from "react-router-dom";
import FlightHeader from "./components/FlightHeader";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/flight/:query" element={<Flightfilter />} />
      </Routes>

    </>
  );
}

export default App;
