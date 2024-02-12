/* eslint-disable react/no-unknown-property */
import React from 'react'
import Nav from './Nav'

function CommonNavbar() {
    return (<div className='flex justify-center w-screen'>
        <div className='w-[1200px] mx-[32px] py-[10px] h-[80px] flex items-center bg-[#fff] '>
            <div><img width={"113px"} height={"36px"} src='	https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png' />
            </div>
            <div className='mr-[135px]'>
                <div className="w-full flex justify-center   z-10 ">
                    <div className="    px-6 pt-3 rounded-lg flex gap-6 text-sm ">
                        <div >
                            <img width={"25px"} height={"20px"} src="../../assets/triplogos/flight-1.png" />
                            <span className="mt-2 inline-block text-[#4a4a4a] text-[12px]">
                                Flights
                            </span>
                        </div>
                        <div>
                            <img width={"25px"} height={"20px"} src="../../assets/triplogos/hotel-1.png" />
                            <span className="mt-2 inline-block text-[#4a4a4a] text-[12px]">
                                Hotels
                            </span>
                        </div>
                        <div>
                            <img width={"25px"} height={"20px"} src="../../assets/triplogos/villa-1.png" />
                            <span className=" inline-block text-[#4a4a4a] text-[12px]">
                                Homestays<br /> & villas
                            </span>
                        </div>
                        <div>
                            <img width={"25px"} height={"20px"} src="../../assets/triplogos/umbrella1.png" />
                            <span className=" inline-block text-[#4a4a4a] text-[12px]">
                                Holiday <br />packages
                            </span>
                        </div>
                        <div>
                            <img width={"25px"} height={"20px"} src="../../assets/triplogos/train-1.png" />
                            <span className="mt-2 inline-block text-[#4a4a4a] text-[12px]">
                                Trains
                            </span>
                        </div>
                        <div>
                            <img width={"25px"} height={"20px"} src="../../assets/triplogos/bus-1.png" />
                            <span className="mt-2 inline-block text-[#4a4a4a] text-[12px]">
                                Buses
                            </span>
                        </div>
                        <div>
                            <img width={"25px"} height={"20px"} src="../../assets/triplogos/car1.png" />
                            <span className="mt-2 inline-block text-[#4a4a4a] text-[12px]">
                                Cabs
                            </span>
                        </div>
                        <div>
                            <img width={"25px"} height={"20px"} src="../../assets/triplogos/forexcard-1.png" />
                            <span className=" inline-block text-[#4a4a4a] text-[12px]">
                                Forex Card<br /> & Currency
                            </span>
                        </div>
                        <div>
                            <img width={"25px"} height={"20px"} src="../../assets/triplogos/travelinsu-1.png" />
                            <span className="mt-1 inline-block text-[#4a4a4a] text-[12px]">
                                Travel Insurance
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex gap-2 mr-2'>
                <img width={"30px"} src='../../assets/mylogo.png' />
                <span className='text-xs font-bold'>Login or <br />Create Account</span>
            </div>
            <div className='mr-3'>
                <img width={"70px"} src='../../assets/countryindia.png' />
            </div>
            <div className='flex'>
                <span className='text-[10px]'>Language <br /><span className='text-xs'>ENG</span> </span>
                <svg class="w-[16px] h-[16px] text-blue-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m19 9-7 7-7-7" />
                </svg>
            </div>
        </div>
    </div>
    )
}

export default CommonNavbar