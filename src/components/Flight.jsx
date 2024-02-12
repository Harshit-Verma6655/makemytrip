import React from "react";
import Flightinner from "./Flightinner";

function Flight() {
  return (
    <div className="w-screen flex justify-center absolute top-[55px] ">
      <div className="w-[1200px] h-[322px] bg-white rounded-lg pt-[65px] px-[30px]">
        <Flightinner />
      </div>
    </div>
  );
}

export default Flight;
