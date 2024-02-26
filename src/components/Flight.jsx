import React from "react";
import Flightinner from "./Flightinner";

function Flight() {
  return (
    <div className=" sm:flex  justify-center items-center w-full  scroll-hide">
      <div className="sm:w-[1200px] sm:h-[340px]  scroll-hide w-full h-full bg-white rounded-lg pt-[65px] px-[30px]">
        <Flightinner />
      </div>
    </div>
  );
}

export default Flight;
