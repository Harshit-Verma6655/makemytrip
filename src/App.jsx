import { useState } from "react";


import Home from "./Pages/Home";
import Flightfilter from "./Pages/Flightfilter";
import FlightCard from "./components/FlightCard";
import { Route, Routes } from "react-router-dom";
import FlightHeader from "./components/FlightHeader";
import SearchFlight from "./Pages/SearchFlight";
import Signup from "./Pages/Signup";
import Booking from "./Pages/Booking";
import Login from "./Pages/Login";
import { useUserContext } from "./FlightContext/UserContext";

function App() {
  // const [count, setCount] = useState(0);
  let { modal, handleModal } = useUserContext();

  return (
    <>
      {modal == "sign" && <Signup handleModal={handleModal} />}
      {modal == "login" && <Login handleModal={handleModal} />}
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/searchFlight" element={<SearchFlight />} />
        <Route path="/flight/:query" element={<Flightfilter />} />
        {/* <Route path="/" element={<Booking />} /> */}
        <Route path="/FlightDetail" element={<Booking />} />
      </Routes>

    </>
  );
}

export default App;
