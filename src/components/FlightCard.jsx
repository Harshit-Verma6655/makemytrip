/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function FlightCard({ detail }) {
    let [visile, setvisible] = useState(true);
    let [viewFlight, setviewFlight] = useState(false);
    let [flightIndex, setflightIndex] = useState(parseInt(Math.random() * 6));
    let logo = [["IndiGo", "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=18"], ["SpiceJet", "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/SG.png?v=18"], ["Vistara", "	https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/UK.png?v=18"], ["Akasa Air", "	https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/QP.png?v=18"], ["Air India Express", "	https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/IX.png?v=18"], ["Air India", "	https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/AI.png?v=18"]];
    // setflightIndex(parseInt(Math.random() * 6));
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const position = 200;
    //         setvisible(window.scrollY <= position);
    //     }
    //     window.addEventListener('scroll', handleScroll)




    // }, [])

    const handleView = () => {
        setviewFlight(!viewFlight);
    }
    return <>
        <div className='sm:w-[900px] w-screen shadow-lg mb-4  bg-white'>

            <div className='pt-[14px] px-4   mt-[8px] '>
                <div className='flex sm:justify-between flex-col   sm:flex-row'>
                    <div className='flex items-start justify-start mb-2 '>
                        <div className='flex justify-start items-center'>
                            <span className='mr-[10px]'>
                                <img width={"40px"} height={"40px"} src={logo[flightIndex][1]}></img>
                            </span>
                        </div>
                        <div className='flex flex-col sm:mr-16 justify-start items-start '>
                            <p className='font-semibold'>{logo[flightIndex][0]}</p>
                            <p className='text-xs text-[#878787]'>{detail?.flightID}</p>
                        </div>
                        <div>
                            <label>
                                <div className='py-[5px] px-[10px]'>
                                    <div>
                                        <div className='flex gap-6'>
                                            <div className='mr-[10px] flex flex-col items-center justify-center'>
                                                <p >
                                                    <span className='font-black text-lg'>{detail?.departureTime}</span>
                                                </p>
                                                <p className='text-xs font-semibold'>
                                                    {detail?.source}
                                                </p>
                                            </div>
                                            <div className='mr-[10px] flex flex-col items-center '>
                                                <p className='text-xs'>
                                                    {detail?.duration} <span className='text-[#757575]'>h</span> 00 <span className='text-[#757575]'>m</span>
                                                </p>
                                                <div className='flex flex-col justify-center items-center'>
                                                    <div>
                                                        <p className='sm:mx-[35px] my-[6px]'>
                                                            <img src={`../../assets/${detail?.stops}.png`} />
                                                        </p>
                                                    </div>
                                                    <p className='text-[10px] text-[#6d7278] font-semibold'>{detail?.stops} stop via Ahmedabad</p>
                                                </div>
                                            </div>
                                            <div className=''>
                                                <p className='mb-[2px]'>
                                                    <span className='font-black text-lg  mr-1'>10:30</span>
                                                    <span className='text-red-500 text-[10px] '>+1 day</span>
                                                </p>
                                                <p className='text-[#000000] text-xs font-semibold'>
                                                    {detail?.destination
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>

                    </div>
                    <div className='mb-[20px] flex items-center  '>
                        <div>
                            <div className='mr-[10px] flex flex-col justify-center items-center'>
                                <div className='text-[18px] font-black'>₹ {detail?.ticketPrice}</div>
                                <p className='text-xs'>per Adult</p>
                            </div>
                        </div>
                        <button className='border  border-[#008cff] text-[008cff] bg-[#daebff] text-sm text-bold h-[31px] rounded-[96px] px-[8px]'><span className='text-[#008cff]'>BOOK NOW</span></button>
                    </div>

                </div>
            </div>
            <div className='flex sm:justify-end cursor-pointer px-4 mb-3'>
                <span className='p-[8px] flex items-center bg-[#e9f3ff] w-fit px-3'>
                    <span className='mr-[5px]'><img width={"12px"} height={"12px"} src='https://imgak.mmtcdn.com/flights/assets/media/dt/listing/plc.png' /></span>
                    <span className='text-[#008cff] text-xs mr-1'>Lock this price for ₹ 319
                    </span>
                    <span>
                        <img width={"10px"} src='https://imgak.mmtcdn.com/flights/assets/media/dt/listing/hb.png' />
                    </span>
                </span>
            </div>
            <div className='px-4'>
                <p className='py-[3px] px-4  flex justify-center items-center' style={{ background: "rgb(255, 237, 209)" }}>
                    <div className='w-2 h-2 bg-red-500 rounded-full mr-2'></div>
                    <span className='text-xs'>Get Rs 250 off using MMTBONUS* & complimentary meal on this flight</span>
                </p>
            </div>
            <div className='flex sm:justify-end  px-4 mt-2 p-4 shadow-lg'>
                < span className='cursor-pointer text-xs text-[#0091ff] ' onClick={handleView}>{!viewFlight ? "View Flight Details" : "Hide Flight Details"}</span>
            </div>
            {viewFlight && <>
                <div className='bg-[#fafbfc]'>
                    <div className=' shadow-inner py-[17px] px-[20px] '>
                        <nav className='mb-[24px] flex justify-start w-fit shadow  '>
                            <Link className='py-[7px] px-[14px] bg-[#fff] text-sm  '>FLIGHT DETAILS</Link>
                            <Link className='py-[7px] px-[14px] bg-[#fff] text-sm'>FARE SUMMARY</Link>
                            <Link className='py-[7px] px-[14px] bg-[#fff] text-sm '>CANCELLATION</Link>
                            <Link className='py-[7px] px-[14px] bg-[#fff] text-sm   '>DATE CHANGE</Link>
                        </nav>
                        <div>
                            <div>
                                <div>
                                    <div className='border border-[#dfdfdf] rounded-md'>
                                        <p className='px-[12px] py-[10px] font-[600] border-b border-[#dfdfdf]'>
                                            {detail?.source + " to " + detail.destination + " 10 Feb"}
                                        </p>
                                        <div className='p-[12px]'>
                                            <div>
                                                <p className='flex items-center gap-2'>
                                                    <span><img width={"32px"} height={"32px"} src={logo[flightIndex][1]}></img></span>
                                                    <span className='text-sm '>
                                                        {logo[flightIndex][0]}<span className='ml-3'>
                                                            <span className='text-[#6d7278] '>AI | 660</span>
                                                        </span>
                                                    </span>
                                                    <p className='text-xs rounded-lg font-bold px-1 flex justify-center items-center' style={{ color: "rgb(117, 117, 117)", border: "1px solid rgb(117, 117, 117)" }}>Airbus A320</p>
                                                </p>
                                                <div className='flex justify-around items-center'>
                                                    <div>
                                                        <div>
                                                            <label>
                                                                <div className='py-[5px] px-[10px]'>
                                                                    <div>
                                                                        <div className='flex sm:gap-6'>
                                                                            <div className='sm:mr-[10px] flex flex-col items-center justify-center'>
                                                                                <p >
                                                                                    <span className='font-black text-sm'>{detail?.departureTime}</span>
                                                                                </p>
                                                                                <p className='text-xs font-semibold'>
                                                                                    {detail?.source}
                                                                                </p>
                                                                            </div>
                                                                            <div className='mr-[10px] flex flex-col items-center '>
                                                                                <p className='text-xs'>
                                                                                    11 <span className='text-[#757575]'>h</span> 40 <span className='text-[#757575]'>m</span>
                                                                                </p>
                                                                                <div className='flex flex-col justify-center items-center'>
                                                                                    <div>
                                                                                        <p className='mx-[35px] my-[6px]'>
                                                                                            <img src={`../../assets/${detail?.stops}.png`} />
                                                                                        </p>
                                                                                    </div>
                                                                                    <p className='text-[10px] text-[#6d7278] font-semibold'>{detail?.stops} stop via Ahmedabad</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className=''>
                                                                                <p className='mb-[2px]'>
                                                                                    <span className='font-black text-sm  mr-1'>10:30</span>
                                                                                    <span className='text-red-500 text-[10px] '>+1 day</span>
                                                                                </p>
                                                                                <p className='text-[#000000] text-xs font-semibold'>
                                                                                    {detail?.destination
                                                                                    }
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='sm:mx-[50px]'>
                                                        <p className='mb-2 flex font-bold text-xs'>
                                                            <span className='pr-3'>BAGGAGE :</span>
                                                            <span className='pr-3'>CHECK IN </span>
                                                            <span className='pr-3'>CABIN </span>
                                                        </p>
                                                        <p></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </>
            }
        </div>
    </>

}

export default FlightCard