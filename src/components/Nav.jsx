import React from "react";
import { Link, NavLink } from "react-router-dom";
import hotel from "../../assets/triplogos/hotel-1.png";
import flight from "../../assets/triplogos/flight-1.png";
import home from "../../assets/triplogos/villa-1.png";
import holiday from "../../assets/triplogos/umbrella1.png";
import train from "../../assets/triplogos/train-1.png";
import bus from "../../assets/triplogos/bus-1.png";
import cab from "../../assets/triplogos/car1.png";
import forex from "../../assets/triplogos/forexcard-1.png";
import travel from "../../assets/triplogos/travelinsu-1.png";
function Nav() {
  return (
    <div className="w-full  flex justify-center absolute top-0 z-10 ">
      <div className="sm:w-[928px] h-[110px] sm:flex   bg-white px-6 pt-3 rounded-lg hidden gap-12 text-sm shadow-lg">
        <div>
          <img width={"62px"} src={flight} />
          <NavLink className="mt-2 inline-block text-[#4a4a4a] text-[14px]">
            Flights
          </NavLink>
        </div>
        <div>
          <img width={"52px"} src={hotel} />
          <span className="mt-2 inline-block text-[#4a4a4a] text-[14px]">
            Hotels
          </span>
        </div>
        <div>
          <img width={"52px"} src={home} />
          <span className="mt-2 inline-block text-[#4a4a4a] text-[14px]">
            Homestays & villas
          </span>
        </div>
        <div>
          <img width={"42px"} src={holiday} />
          <span className="mt-2 inline-block text-[#4a4a4a] text-[14px]">
            Holiday packages
          </span>
        </div>
        <div>
          <img width={"65px"} src={train} />
          <span className="mt-2 inline-block text-[#4a4a4a] text-[14px]">
            Trains
          </span>
        </div>
        <div>
          <img width={"65px"} src={bus} />
          <span className="mt-2 inline-block text-[#4a4a4a] text-[14px]">
            Buses
          </span>
        </div>
        <div>
          <img width={"65px"} src={cab} />
          <span className="mt-2 inline-block text-[#4a4a4a] text-[14px]">
            Cabs
          </span>
        </div>
        <div>
          <img width={"42px"} src={forex} />
          <span className="mt-2 inline-block text-[#4a4a4a] text-[14px]">
            Forex Card & Currency
          </span>
        </div>
        <div>
          <img width={"42px"} src={travel} />
          <span className="mt-1 inline-block text-[#4a4a4a] text-[14px]">
            Travel Insurance
          </span>
        </div>
      </div>
      <div className="w-full mx-2 py-6 sm:hidden   bg-[rgb(242,242,242)] gap-2 justify-center pt-3 rounded-lg flex flex-wrap  text-sm shadow-lg  items-center">
        <div className="bg-white p-6 rounded-lg">
          <img width={"62px"} src={flight} />
          <NavLink className="mt-2 inline-block text-[#4a4a4a] text-[14px]">
            Flights
          </NavLink>
        </div>
        <div className="bg-white p-6 rounded-lg">
          <img width={"52px"} src={hotel} />
          <span className="mt-2 inline-block text-[#4a4a4a] text-[14px]">
            Hotels
          </span>
        </div>
        <div className="flex items-center flex-col bg-white p-6 rounded-lg">
          <img width={"52px"} src={home} />
          <span className="mt-2 inline-block text-[#4a4a4a] text-[14px]">
            Homestays & villas
          </span>
        </div>
        <div className="flex items-center flex-col bg-white p-6 rounded-lg">
          <img width={"42px"} src={holiday} />
          <span className="mt-2 inline-block text-[#4a4a4a] text-[14px]">
            Holiday packages
          </span>
        </div>
        <div className="bg-white p-6 rounded-lg">
          <img width={"65px"} src={train} />
          <span className="mt-2 inline-block text-[#4a4a4a] text-[14px]">
            Trains
          </span>
        </div>
        <div className="bg-white p-6 rounded-lg">
          <img width={"65px"} src={bus} />
          <span className="mt-2 inline-block text-[#4a4a4a] text-[14px]">
            Buses
          </span>
        </div>
        <div className="bg-white p-6 rounded-lg">
          <img width={"65px"} src={cab} />
          <span className="mt-2 inline-block text-[#4a4a4a] text-[14px]">
            Cabs
          </span>
        </div>
        <div className="flex items-center flex-col bg-white p-6 rounded-lg">
          <img width={"42px"} src={forex} />
          <span className="mt-2 inline-block text-[#4a4a4a] text-[14px]">
            Forex Card & Currency
          </span>
        </div>
        <div className="bg-white p-6 rounded-lg">
          <img width={"42px"} src={travel} />
          <span className="mt-1 inline-block text-[#4a4a4a] text-[14px]">
            Travel Insurance
          </span>
        </div>
      </div>
    </div>
  );
}

export default Nav;
