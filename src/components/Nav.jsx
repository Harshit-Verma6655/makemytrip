import React from "react";

function Nav() {
  return (
    <div className="w-screen flex justify-center absolute top-0 z-10 ">
      <div className="w-[928px] h-[110px]  bg-white px-6 pt-3 rounded-lg flex gap-12 text-sm shadow-lg">
        <div>
          <img width={"62px"} src="../../assets/triplogos/flight-1.png" />
          <span className="mt-2 inline-block text-[#4a4a4a] text-[14px]">
            Flights
          </span>
        </div>
        <div>
          <img width={"52px"} src="../../assets/triplogos/hotel-1.png" />
          <span className="mt-2 inline-block text-[#4a4a4a] text-[14px]">
            Hotels
          </span>
        </div>
        <div>
          <img width={"52px"} src="../../assets/triplogos/villa-1.png" />
          <span className="mt-2 inline-block text-[#4a4a4a] text-[14px]">
            Homestays & villas
          </span>
        </div>
        <div>
          <img width={"42px"} src="../../assets/triplogos/umbrella1.png" />
          <span className="mt-2 inline-block text-[#4a4a4a] text-[14px]">
            Holiday packages
          </span>
        </div>
        <div>
          <img width={"65px"} src="../../assets/triplogos/train-1.png" />
          <span className="mt-2 inline-block text-[#4a4a4a] text-[14px]">
            Trains
          </span>
        </div>
        <div>
          <img width={"65px"} src="../../assets/triplogos/bus-1.png" />
          <span className="mt-2 inline-block text-[#4a4a4a] text-[14px]">
            Buses
          </span>
        </div>
        <div>
          <img width={"65px"} src="../../assets/triplogos/car1.png" />
          <span className="mt-2 inline-block text-[#4a4a4a] text-[14px]">
            Cabs
          </span>
        </div>
        <div>
          <img width={"42px"} src="../../assets/triplogos/forexcard-1.png" />
          <span className="mt-2 inline-block text-[#4a4a4a] text-[14px]">
            Forex Card & Currency
          </span>
        </div>
        <div>
          <img width={"42px"} src="../../assets/triplogos/travelinsu-1.png" />
          <span className="mt-1 inline-block text-[#4a4a4a] text-[14px]">
            Travel Insurance
          </span>
        </div>
      </div>
    </div>
  );
}

export default Nav;
