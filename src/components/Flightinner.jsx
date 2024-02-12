/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import Search from "./Search";
import { airportSearch, flightsAvailable } from "../APIs/flightSearch";
import { useNavigate } from "react-router-dom";
import { useFlightContext } from "../FlightContext/FlightContext";
function Flightinner() {
  let [srcCity, setsrcCity] = useState(null);
  let [destCity, setdestCity] = useState(null);
  let { src, setsrc } = useFlightContext();
  let { dest, setdest } = useFlightContext();
  let { day, setDay } = useFlightContext();
  let [srcInput, setsrcInput] = useState();
  let [destInput, setdestInput] = useState();
  const { SearchFlights } = useFlightContext();
  const navigate = useNavigate();
  let handleCity = (e) => {
    setsrcInput(e.target.value);
    if (e.target.value) {
      airportSearch(e.target.value).then((data) => {
        // console.log(data.data.airports, "dataairports");
        setsrcCity(data.data.airports);
      });
    } else {
      setsrcCity(null);
    }
  };
  let handleReturnCity = (e) => {
    setdestInput(e.target.value);
    if (e.target.value) {
      airportSearch(e.target.value).then((data) => {
        // console.log(data.data.airports, "dataairports");
        setdestCity(data.data.airports);
      });
    } else {
      setdestCity(null);
    }
  };
  const handleDay = (e) => {


    setDay(e.target.value);
    console.log("day", day)

  };

  const handleExchange = () => {
    let temp = srcInput;
    setsrcInput(destInput);
    setdestInput(temp);
    let temp2 = src;
    setsrc(dest);
    setdest(temp2)
  }
  const handleSearch = () => {
    // console.log(src, dest, day);
    SearchFlights(day, src, dest);
    navigate(`/flight/${src.iata_code}-${dest.iata_code}-${day}`);
  }

  return (
    <div className="" onClick={() => { setdestCity(); setsrcCity(); }}>
      <div className="flex justify-between">
        <div className="flex gap-7 ml-2">
          <label htmlFor="One" className="hover:bg-blue-50 px-2 py-1 rounded-full cursor-pointer">
            <input type="radio" className="mr-2" name="trip" id="One" />
            <span className="font-bold">One way</span>
          </label>
          <label htmlFor="Round" className="hover:bg-blue-50 px-2 py-1 rounded-full cursor-pointer">
            <input type="radio" className="mr-2" name="trip" id="Round" />
            <span className="font-bold">Round Trip</span>
          </label>
          <label htmlFor="Multi" className="hover:bg-blue-50 px-2 py-1 rounded-full cursor-pointer">
            <input type="radio" className="mr-2" name="trip" id="Multi" />
            <span className="font-bold">Multi city</span>
          </label>
        </div>
        <span className="text-gray-600">
          Book International and Domestic Flights
        </span>
      </div>
      <div className="py-[11px] mb-[8px]">
        <div className="h-[119px] border-gray-300 border rounded-lg flex  ">
          <div className="w-[300px] h-full     border-gray-300 border-r relative">
            <div className="px-[25px] py-[10px] justify-ceter flex flex-col">
              <label className="mb-1 w-full text-gray-600">From</label>
              <input
                type="text"
                onChange={handleCity}
                value={srcInput?.city}
                placeholder={`Delhi, (DEL)`}
                className="text-[30px] w-full   font-bold border-none outline-0  "
              />
              <p className="text-xs text-gray-500 text-left">{srcInput?.name}</p>
              {srcCity && (
                <ul className="bg-white border p-2 pt-4 overflow-scroll city rounded max-h-[220px] w-[270px]">
                  {srcCity?.map((airport) => {
                    return (
                      <li
                        key={airport._id}
                        className="flex items-center  mb-5 cursor-pointer justify-between"
                        onClick={() => {
                          setsrc(airport);
                          setsrcInput(airport);
                        }}
                      >
                        <div className="flex gap-1">
                          <div>
                            <img src="../../assets/plane-small.png" width={25} style={{ minHeight: "20px" }} /></div>
                          <span className="flex flex-col">
                            <span className="text-sm text-gray-800">
                              {airport.city}, {airport.country}
                            </span>
                            <span className="text-xs text-gray-600">
                              {airport.name}
                            </span>
                          </span>
                        </div>
                        <span className="ml-1 text-gray-500 font-bold ">
                          {airport.iata_code}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <span
              className="w-[40px] h-[40px] bg-[#fff] shadow-lg rounded-full z-10 absolute
            -right-[20px] top-[35px] flex justify-center items-center cursor-pointer
            "
              onClick={handleExchange}
            >
              <svg
                className="w-[28px] h-[28px] text-blue-800 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16h13M4 16l4-4m-4 4 4 4M20 8H7m13 0-4 4m4-4-4-4"
                />
              </svg>
            </span>
          </div>

          <div className="w-[300px] h-full   border-gray-300 border-r relative">
            <div className="px-[25px] py-[10px]  flex flex-col">
              <label className="mb-1 w-full text-gray-600">To</label>
              <input
                type="text"
                onChange={handleReturnCity}
                placeholder={`Mumbai, (MUM)`}
                className="text-[30px] w-full   font-bold border-none outline-0"
                value={destInput?.city}
              />
              <p className="text-xs text-gray-500 text-left">{destInput?.name}</p>
              {destCity && (
                <ul className="bg-white border p-2 pt-4 overflow-scroll city rounded max-h-[220px] w-[270px]">
                  {destCity?.map((airport) => {
                    return (
                      <li
                        key={airport._id}
                        className="flex items-center  mb-5 cursor-pointer justify-between"
                        onClick={() => {
                          setdest(airport);
                          setdestInput(airport);
                        }}
                      >
                        <div className="flex gap-1">
                          <div>
                            <img src="../../assets/plane-small.png" width={25} style={{ minHeight: "20px" }} /></div>
                          <span className="flex flex-col">
                            <span className="text-sm text-gray-800">
                              {airport.city}, {airport.country}
                            </span>
                            <span className="text-xs text-gray-600">
                              {airport.name}
                            </span>
                          </span>
                        </div>
                        <span className="ml-1 text-gray-500 font-bold ">
                          {airport.iata_code}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

          </div>
          <div className="w-[158px] border-gray-300 border-r p-[2px]">
            <label htmlFor="departure" className="">
              <span className="flex pl-[15px] items-center gap-3">
                <span className="text-gray-600">Return</span>
                <svg
                  className="w-[15px] h-[15px] text-blue-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </span>
              <input
                id="departure"
                type="date"
                className="mt-5 font-bold text-[16px] pl-[15px]"
                onChange={handleDay}
              />
            </label>
          </div>
          <div className="w-[158px] border-gray-300 border-r p-[2px]">
            <label htmlFor="return" className="">
              <span className="flex pl-[15px] mb-2 items-center gap-3">
                <span className="text-gray-600">Return</span>
                <svg
                  className="w-[15px] h-[15px] text-blue-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </span>

              <input id="return" type="date" className="w-full h-full hidden" />
              <label htmlFor="return">
                <p className="pl-[15px] text-gray-400 font-bold text-sm">
                  Tap to add a return date for bigger discounts
                </p>
              </label>
            </label>
          </div>
          <div className="w-[158px] p-[2px]">
            <label htmlFor="return" className="relative h-full w-full">
              <span className="flex pl-[15px]  items-center gap-1">
                <span className="text-sm text-gray-600">
                  Travellers & Class
                </span>
                <svg
                  className="w-[15px] h-[15px] text-blue-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </span>

              <p className="  text-[18px] pl-[15px]">
                <span className="text-[30px] text-black font-semibold">4</span>{" "}
                Travellers{" "}
                <span className="text-base text-gray-600">Premiun Economy</span>
              </p>
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-4">
        <div className="flex items-center ">
          <p className="text-[14px] leading-none font-[600] text-gray-600 mr-1">
            Select A <br /> Fare type:
          </p>
          <ul className="  flex">
            <li
              className="flex gap-1 p-[8px] mr-[1px] bg-[#f2f2f2] rounded-l
            "
            >
              <input type="radio" name='fare' />
              <p className="leading-none text-xs">
                Regular <br />
                Fares
              </p>
            </li>
            <li
              className="flex gap-1 p-[8px] mr-[1px] bg-[#f2f2f2]
            "
            >
              <input type="radio" name='fare' />
              <p className="leading-none text-xs">
                Armed Forces <br />
                Fares
              </p>
            </li>
            <li
              className="flex gap-1 p-[8px] mr-[1px] bg-[#f2f2f2]
            "
            >
              <input type="radio" name='fare' />
              <p className="leading-none text-xs">
                Student <br />
                Fares
              </p>
            </li>
            <li
              className="flex gap-1 p-[8px] mr-[1px] bg-[#f2f2f2]
            "
            >
              <input type="radio" name='fare' />
              <p className="leading-none text-xs">
                Senior Citizen <br />
                Fares
              </p>
            </li>
            <li
              className="flex gap-1 p-[8px] mr-[1px] bg-[#f2f2f2] 
            "
            >
              <input type="radio" name='fare' />
              <p className="leading-none text-xs">
                Doctors & Nurses <br />
                Fares
              </p>
            </li>
            <li
              className="flex gap-1 p-[8px] mr-[1px] bg-[#f2f2f2] rounded-r
            "
            >
              <input type="radio" name='fare' />
              <p className="leading-none text-xs">
                Doule Seat <br />
                Fares
              </p>
            </li>
          </ul>
        </div>
        <div className="flex items-center ">
          <p className="text-[14px] leading-none font-[600] text-gray-600 mr-1">
            Trending Searches:
          </p>
          <ul className="  flex h-[31px]">
            <li
              className="flex gap-1 p-[8px] mr-[8px] bg-[#f2f2f2] rounded-md
            "
            >
              <p className="leading-none text-xs flex items-center">
                Mumbai
                <svg
                  className="w-[20px] h-[20px] text-[#008cff] "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.9"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
                Goa
              </p>
            </li>

            <li
              className="flex gap-1 p-[8px] mr-[1px] bg-[#f2f2f2] rounded-md
            "
            >
              <p className="leading-none text-xs flex items-center">
                Delhi
                <svg
                  className="w-[20px] h-[20px] text-[#008cff] "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.9"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
                Dubai
              </p>
            </li>
          </ul>
        </div>
      </div>
      <Search handleSearch={handleSearch} />
    </div>
  );
}

export default Flightinner;
