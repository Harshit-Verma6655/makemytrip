import React, { useEffect } from 'react'
import CommonNavbar from '../components/CommonNavbar'
import { useFlightContext } from '../FlightContext/FlightContext'
import { Link } from 'react-router-dom';

function Booking() {
    let { getFlight, } = useFlightContext();
    let flight = getFlight();
    console.log("Booked", flight);
    return (
        <div className='max-w-[1280px] w-screen  box-border'>
            <CommonNavbar />
            <div className='bg-[#041422] z-20 py-4 flex justify-between px-4 sticky top-0 text-white'>
                <h1>  Complete your Booking </h1>
                <ul className='flex gap-4 text-xs'>
                    <li>Flight Summary</li>
                    <li>Flight Summary</li>
                    <li>Flight Summary</li>
                    <li>Flight Summary</li>
                    <li>Flight Summary</li>
                </ul>
            </div>
            <div className='relative bg-blue-200 pb-16 w-full  pt-4  gap-2 overflow-y-scroll flex scroll-hide'>
                <div className='h-[180px]     absolute w-screen top-0 ' style={{ backgroundImage: "linear-gradient(0deg,#15457b,#051423)" }}></div>
                <div className='p-4 mx-2 bg-white z-10 sm:w-[880px] max-w-[880px]'>
                    <div className='bg-white p-4 z-10 shadow'>
                        <div className='mt-6 flex justify-between' >
                            <div>
                                <h1 className='text-lg my-4 font-black'>{flight.srcName.city} to {flight.destName.city}</h1>
                                <p className='text-sm'><span className='bg-[rgb(255,237,209)]'>{new Date(flight.day).toDateString()}</span > stops {flight.stops}  </p>
                            </div>
                            <div className='text-sm my-4 '>
                                <p className='my-4'>Non Refundable</p>
                                <p>View fare rules</p>
                            </div>

                        </div>
                        <div className='flex text-sm'>
                            <p> Aksa Air QP 1367</p>
                            <p>
                                Economy saver
                            </p>
                        </div>
                        <div className='bg-gray-300 text-sm my-4  p-6'>
                            <p className='text-sm mt-4 flex items-center gap-4'>02:20
                                <div className='h-4 rounded-full border-4  w-4'></div><span className='text-bold'>{flight.srcName.city}</span> {flight.srcName.name}</p>
                            <p className='text-bold border-l border-dashed text-xl py-3 border-black ml-[59px] pl-4'>{flight.duration}h:00m</p>
                            <p className='text-sm mb-4 flex gap-4 items-center'>02:20
                                <div className='h-4 rounded-full border-4  w-4'></div><span className='text-bold'>{flight.destName.city}</span> {flight.destName.name}</p>
                            <hr />
                            <p className='flex justify-start flex-col gap-6 font-bold text-sm mt-4'>

                                <span> Cabin Baggage:7 Kgs (1 piece only) / Adult</span>
                                <span className='mr-36'> Check-In Baggage:15 Kgs (1 piece only) / Adult</span>
                            </p>

                        </div>
                        <p className='flex bg-blue-100 gap-20 text-xs'>
                            <span>
                                Got excess baggage? Don’t stress, buy extra check-in baggage allowance for BOM-BLR at fab rates!</span>
                            <span>+ADD</span>
                        </p>


                    </div>
                    <div className='shadow p-8 my-6'>
                        <h1 className='text-sm my-2 font-black '>Important Information</h1>
                        <p className='text-xs font bold my-2 font-bold'>Check travel guidelines and baggage information below:</p>
                        <ul className='text-xs list-disc '>
                            <li className='my-2 underline'>Carry no more than 1 check-in baggage and 1 hand baggage per passenger. If violated, airline may levy extra charges.</li>
                            <li>Wearing a mask/face cover is no longer mandatory. However, all travellers are advised to do so as a precautionary measure.</li>
                        </ul>
                    </div>
                    <button className='gradient text-white px-8 text-xl py-2 font-bold rounded-full'><Link to={"https://rzp.io/l/Ul2UpNGaG0"}>Continue</Link></button>
                </div>
                <div className='p-6 z-10 h-fit bg-white sticky top-0 w-[285px]'>

                    <h1 className='font-black my-6'>Fare Summary</h1>
                    <p className='my-2 flex justify-between'><span className=' font-bold mr-6 list-disc'>Base Fare</span><span className='font-bold'>₹ {flight.ticketPrice}</span></p>
                    <p className='my-4  flex justify-between list-disc'><span className=' font-bold mr-6'>Taxes and Surcharges</span><span className='font-bold'>₹ {flight.ticketPrice * (0.1)}</span></p>
                    <hr className='font-bold text-black' />
                    <p className='my-4  flex justify-between'><span className=' font-black mr-6'>Total Ammount</span><span className='font-black'>₹ {flight.ticketPrice + flight.ticketPrice * (0.1)}</span></p>

                </div>
            </div>

        </div>
    )
}

export default Booking