import React, { useEffect, useState } from 'react'
import CommonNavbar from '../components/CommonNavbar'
import { useFlightContext } from '../FlightContext/FlightContext'
import { Link } from 'react-router-dom';

function Booking() {
    let { getFlight, } = useFlightContext();
    let [flight, setflight] = useState();
    let [gender, setgender] = useState();
    useEffect(() => {
        let flightobj = getFlight();
        setflight(flightobj);
    }, [])

    console.log("Booked", flight);
    return (
        <div className='max-w-[1280px] w-screen  box-border'>
            <div className='hidden sm:block'>

                <CommonNavbar />
            </div>

            <div className='bg-[#041422] z-20 py-4 flex justify-between px-4 sticky top-0 text-white'>
                <h1 className='text-2xl font-bold'>  Complete your Booking </h1>
                <ul className='sm:flex gap-4 text-[10px] hidden '>
                    <li className='cursor-pointer' onClick={() => {
                        window.scrollTo({ top: 120, behavior: 'smooth' });

                    }}>Flight Summary</li>
                    <li className='cursor-pointer' onClick={() => {
                        window.scrollTo({ top: 1000, behavior: 'smooth' });

                    }}>Traveller Details</li>
                    <li>Seats & Meals</li>
                    <li>Add-ons</li>

                </ul>
            </div>
            <div className='relative bg-blue-200 pb-16 w-full px-2   pt-4 items-center sm:items-start  gap-2 overflow-y-scroll flex scroll-hide flex-col sm:flex-row'>
                <div className='h-[180px]     absolute w-screen top-0 ' style={{ backgroundImage: "linear-gradient(0deg,#15457b,#051423)" }}></div>
                <div className='p-4 mx-2 bg-white z-10 sm:w-[880px] max-w-[880px]'>
                    <div className='bg-white p-4 z-10 shadow'>
                        <div className='mt-6 flex justify-between' >
                            <div>
                                <h1 className='text-lg my-4 font-black'>{flight?.srcName?.city} to {flight?.destName?.city}</h1>
                                <p className='text-sm'><span className='bg-[rgb(255,237,209)]'>{new Date(flight?.day).toDateString()}</span > stops {flight?.stops}  </p>
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
                                <div className='h-4 rounded-full border-4  w-4'></div><span className='text-bold'>{flight?.srcName?.city}</span> {flight?.srcName?.name}</p>
                            <p className='text-bold border-l border-dashed text-xl py-3 border-black ml-[59px] pl-4'>{flight?.duration}h:00m</p>
                            <p className='text-sm mb-4 flex gap-4 items-center'>02:20
                                <div className='h-4 rounded-full border-4  w-4'></div><span className='text-bold'>{flight?.destName?.city}</span> {flight?.destName?.name}</p>
                            <hr />
                            <p className='flex justify-start flex-col gap-6 font-bold text-sm mt-4'>

                                <span className='text-xs sm:text-base'> Cabin Baggage:7 Kgs (1 piece only) / Adult</span>
                                <span className='sm:mr-36 text-xs sm:text-base'> Check-In Baggage:15 Kgs (1 piece only) / Adult</span>
                            </p>

                        </div>
                        <p className='flex bg-blue-100 gap-20 text-xs p-4'>
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
                    <div className='p-8 w-full shadow mb-8'>
                        <h1 className='font-bold my-3'>Traveller Details</h1>
                        <div className='flex justify-between my-3'><p>
                            ADULT (12 yrs+)</p>
                            <p>1/1
                                added</p>

                        </div>
                        <p className='text-sm my-4 '>Important: Enter name as mentioned on your passport or Government approved IDs.</p>
                        <form className='shadow p-6' action='https://rzp.io/l/Ul2UpNGaG0'>
                            <label className='w-full text-bold my-3 '>
                                <input type='checkbox' /> Adult
                            </label>
                            <hr />
                            <div className='flex gap-4 my-5 flex-col sm:flex-rows'>
                                <input type='text' required placeholder='First & Middle Name' className='border-2 p-2' />
                                <input type='text' required placeholder='Last Name' className='border-2 p-2' />
                                <div className='flex gap-4'><p className={`border-2 p-2 ${gender == "male" && "bg-blue-300"}`}
                                    onClick={() => setgender("male")}
                                >MALE</p><p className={`border-2 p-2 ${gender == "female" && "bg-blue-300"}`}
                                    onClick={() => setgender("female")}
                                >FEMALE</p></div>
                            </div>
                            <div className='flex gap-4 my-5 flex-col sm:flex-rows'>
                                <input type='text' required placeholder='Country Code' value={"+91"} disabled className='border-2 p-2' />
                                <input type='number' required placeholder='mobile number' className='border-2 p-2' />
                                <input type='email' required placeholder=' Email' className='border-2 p-2' />
                            </div>
                            <button className='gradient text-white px-8 text-xl py-2 font-bold rounded-full'>Continue</button>
                        </form>
                    </div>



                </div>
                <div className='p-6 z-10 h-fit bg-white w-full  box-border   sm:w-[285px]'>

                    <h1 className='font-black my-6'>Fare Summary</h1>
                    <p className='my-2 flex justify-between'><span className=' font-bold mr-6 list-disc'>Base Fare</span><span className='font-bold'>₹ {flight?.ticketPrice}</span></p>
                    <p className='my-4  flex justify-between list-disc'><span className=' font-bold mr-6'>Taxes and Surcharges</span><span className='font-bold'>₹ {(flight?.ticketPrice * (0.1)).toFixed(2)}</span></p>
                    <hr className='font-bold text-black' />
                    <p className='my-4  flex justify-between'><span className=' font-black mr-6'>Total Ammount</span><span className='font-black'>₹ {flight?.ticketPrice + +(flight?.ticketPrice * (0.1)).toFixed(2)}</span></p>

                </div>
            </div>

        </div>
    )
}

export default Booking