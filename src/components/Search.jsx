import React from "react";
import { Link } from "react-router-dom";

function Search({ handleSearch }) {
  return <div >
    <p className="flex justify-center ">
      <button className="w-[216px] h-[44px]  rounded-3xl  text-white p-[10px] cursor-pointer
      text-[24px] flex items-center justify-center font-bold
      " style={{ background: "linear-gradient(93deg, #53b2fe, #065af3)" }} onClick={handleSearch}>SEARCH</button>
    </p>

  </div>;
}

export default Search;
