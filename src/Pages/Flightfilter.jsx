import React, { useEffect } from 'react'
import PopularFilterFlight from '../components/PopularFilterFlight'
import FlightCard from '../components/FlightCard'
import { useFlightContext } from '../FlightContext/FlightContext'
import FlightHeader from '../components/FlightHeader';
import CommonNavbar from '../components/CommonNavbar';
import { useParams } from 'react-router-dom';
import FlightOffers from '../components/FlightOffers';

function Flightfilter() {
    const { flights, setsrc, setdest, setDay, SearchFlights } = useFlightContext();

    let { query } = useParams();
    // console.log("query", query);
    let arr = query.split("-");
    let day = `${arr[2]}-${arr[3]}-${arr[4]}`;
    let src = { iata_code: arr[0] };
    let dest = { iata_code: arr[1] };


    useEffect(() => {

        SearchFlights(src, dest, day);
    }, [])
    return (
        <>
            <div className='w-screen sm:w-fit'>
                <div className='hidden sm:block'><CommonNavbar /></div>
                <div className='sticky w-full z-30 top-0 bg-[#041422]'>
                    <FlightHeader />
                </div>
                <div className='flex w-full gap-5 justify-center   relative' style={{ background: "rgb(229, 238, 244)" }}>
                    <span className='absolute w-full min-h-[160px] ' style={{ backgroundImage: "linear-gradient(0deg,#15457b,#051423)" }}></span>
                    <div className='z-20 sm:px-[20px] w-[1255px] flex gap-3 '>
                        <div className='z-20  mt-[35px] hidden sm:block'><PopularFilterFlight /></div>
                        <div className='flex flex-col justify-center z-20 mt-[40px] flex-wrap  scroll-hide'>
                            <h1 className='text-2xl text-white font-bold px-2 '>Flights from {arr[0]} to {arr[1]}</h1>
                            <FlightOffers />
                            {flights?.length > 0 ? flights.map((flight) => <FlightCard key={flight._id} detail={flight} />) : "NO FLIGHTS"}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Flightfilter