/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react'
import { airportSearch } from '../APIs/flightSearch';
import { useFlightContext } from '../FlightContext/FlightContext';
import Search from './Search';
function FlightHeader() {

    let [srcCity, setsrcCity] = useState(null);
    let [destCity, setdestCity] = useState(null);
    let { src, setsrc } = useFlightContext();
    let { dest, setdest } = useFlightContext();
    let { day, setDay } = useFlightContext();
    let [srcInput, setsrcInput] = useState();
    let [destInput, setdestInput] = useState();

    const { SearchFlights } = useFlightContext();
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
    }
    return <>
        <header className='bg-[#041422] h-[115px]'>

            <div className='py-[8px]'>
                <div className='mx-[10px] flex flex-col  items-center  text-white'>

                    <div>
                        <div className="">
                            <div className=" mb-2 rounded-lg flex h-fit  ">
                                <div className=" mr-3 p-[2px] w-[120px] h-[52px] rounded" style={{ background: "hsla(0,0%,100%,.1)" }}>
                                    <label htmlFor="return" className="">
                                        <span className="flex pl-[15px] items-center gap-3">
                                            <span className="text-gray-600">Trip type</span>
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


                                        <label htmlFor="return">
                                            <p className="text-centercent pl-4 text-gray-600 font-bold text-sm">
                                                one way trip
                                            </p>
                                        </label>
                                    </label>
                                </div>
                                <div className="   flex justify-center items-center    relative">
                                    <div className="px-[9px] py-[4px] w-[160px] h-[52px] rounded justify-ceter flex flex-col" style={{ background: "hsla(0,0%,100%,.1)" }}>
                                        <label className=" w-full text-[#008cff] text-sm">From</label>
                                        <input
                                            type="text"
                                            onChange={handleCity}
                                            value={srcInput?.city}
                                            placeholder={`${src?.iata_code + ", (" + src?.iata_code + ")"}`}
                                            className=" w-full text-white  font-bold border-none outline-0 bg-transparent placeholder-white "

                                        />
                                        <p className="text-xs text-gray-500 text-left"></p>
                                        {srcCity && (
                                            <ul className="bg-white border p-2 pt-4 overflow-scroll city rounded max-h-[220px] w-[270px] min-h-[200px]">
                                                {srcCity?.map((airport) => {
                                                    return (
                                                        <li
                                                            key={airport._id}
                                                            className="flex items-center  mb-5 cursor-pointer justify-between"
                                                            onClick={() => {
                                                                setsrc(airport);
                                                                setsrcInput(airport);
                                                                setsrcCity(null);
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
                                        className="w-[25px] h-[25px] bg-transparent shadow-lg rounded-full z-10 absolute
            -right-[25px] top-[15px] flex justify-center items-center cursor-pointer
            "
                                        onClick={handleExchange}
                                    >
                                        <svg
                                            className="w-[20px] h-[20px] text-blue-800 "
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
                                <div className="   flex justify-center items-center relative   ml-6">
                                    <div className="px-[9px] py-[4px] w-[160px] h-[52px] rounded justify-ceter flex flex-col" style={{ background: "hsla(0,0%,100%,.1)" }}>
                                        <label className=" w-full text-[#008cff] text-sm">To</label>
                                        <input
                                            type="text"
                                            onChange={handleReturnCity}
                                            value={destInput?.city}
                                            placeholder={`${dest?.iata_code + ", (" + dest?.iata_code + ")"}`}
                                            className=" w-full text-white  font-bold border-none outline-0 bg-transparent placeholder-white "

                                        />
                                        <p className="text-xs text-gray-500 text-left"></p>
                                        {destCity && (
                                            <ul className="bg-white border p-2 pt-4 overflow-scroll city rounded max-h-[220px] w-[270px] min-h-[200px]">
                                                {destCity?.map((airport) => {
                                                    return (
                                                        <li
                                                            key={airport._id}
                                                            className="flex items-center  mb-5 cursor-pointer justify-between"
                                                            onClick={() => {
                                                                setdest(airport);
                                                                setdestInput(airport);
                                                                setdestCity(null);
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


                                <div className="  mr-3 rounded px-[2px] ml-4" style={{ background: "hsla(0,0%,100%,.1)" }}>
                                    <label htmlFor="departure" className="">
                                        <span className="flex pl-[15px] items-center gap-3">
                                            <span className="text-[#008cff]">Departure Date</span>
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
                                            value={day}
                                            className="rounded bg-transparent text-white mx-1 font-bold text-[16px] pl-[15px]"
                                            onChange={handleDay}
                                        />
                                    </label>
                                </div>



                                <div className=" mr-3 p-[2px] w-[160px] h-[52px] rounded" style={{ background: "hsla(0,0%,100%,.1)" }}>
                                    <label htmlFor="return" className="">
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


                                        <label htmlFor="return">
                                            <p className="text-centercent pl-4 text-gray-400 font-bold text-sm">
                                                Select return
                                            </p>
                                        </label>
                                    </label>
                                </div>

                                <div className=" p-[2px] mr-10  w-[160px] h-[52px] " style={{ background: "hsla(0,0%,100%,.1)" }}>
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

                                        <p className=" text-gray-600 text-[18px] pl-[15px]">
                                            <span className=" text-gray-600 font-semibold">1</span>{" "}
                                            Adult{" "}
                                            <span className="text-base text-gray-600"> Economy</span>
                                        </p>
                                    </label>
                                </div>
                                <div >

                                    <Search handleSearch={handleSearch} />
                                </div>
                            </div>
                            <div >
                                <div className='flex justify-start'>
                                    <div className="flex justify-between mb-4">
                                        <div className="flex items-center ">
                                            <p className="text-[14px] leading-none font-[600] text-[#9b9b9b] mr-1">
                                                Fare type:
                                            </p>
                                            <ul className="  flex">
                                                <li
                                                    className="flex gap-1 p-[8px] mr-[1px] bg-[#213952] rounded-l items-center
            "
                                                >
                                                    <input type="radio" name='fare' />
                                                    <p className="leading-none text-xs">
                                                        Regular <br />

                                                    </p>
                                                </li>
                                                <li
                                                    className="flex gap-1 p-[12px] mr-[1px] bg-[#213952] items-center
            "
                                                >
                                                    <input type="radio" name='fare' />
                                                    <p className="leading-none text-xs">
                                                        Armed Forces <br />

                                                    </p>
                                                </li>
                                                <li
                                                    className="flex gap-1 p-[12px] mr-[1px] bg-[#213952] items-center
            "
                                                >
                                                    <input type="radio" name='fare' />
                                                    <p className="leading-none text-xs">
                                                        Student <br />

                                                    </p>
                                                </li>
                                                <li
                                                    className="flex gap-1 p-[12px] mr-[1px] bg-[#213952] items-center
            "
                                                >
                                                    <input type="radio" name='fare' />
                                                    <p className="leading-none text-xs">
                                                        Senior Citizen <br />

                                                    </p>
                                                </li>
                                                <li
                                                    className="flex gap-1 p-[12px] mr-[1px] bg-[#213952] items-center
            "
                                                >
                                                    <input type="radio" name='fare' />
                                                    <p className="leading-none text-xs">
                                                        Doctors & Nurses <br />

                                                    </p>
                                                </li>
                                                <li
                                                    className="flex gap-1 p-[12px] mr-[1px] bg-[#213952] rounded-r items-center
            "
                                                >
                                                    <input type="radio" name='fare' />
                                                    <p className="leading-none text-xs">
                                                        Doule Seat <br />

                                                    </p>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div>

            </div>
        </header>


    </>
}

export default FlightHeader