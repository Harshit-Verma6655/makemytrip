/* eslint-disable react/no-unknown-property */
import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import flight from "../../assets/triplogos/flight-1.png";
import home from "../../assets/triplogos/villa-1.png";
import holiday from "../../assets/triplogos/umbrella1.png";
import train from "../../assets/triplogos/train-1.png";
import buses from "../../assets/triplogos/bus-1.png";
import cabs from "../../assets/triplogos/car1.png";
import forex from "../../assets/triplogos/forexcard-1.png";
import travel from "../../assets/triplogos/travelinsu-1.png";
import login from '../../assets/mylogo.png';
import country from '../../assets/countryindia.png';
import { useUserContext } from '../FlightContext/UserContext';
function CommonNavbar({ handleModal }) {


    const { logged, userdetail } = useUserContext();
    return (<div className='flex justify-center w-screen sm:w-screen items-center'>
        <div className='sm:max-w-[1600px] w-full justify-center  py-[10px] h-[80px] flex items-center bg-[#fff] '>
            <div><img width={"113px"} height={"36px"} src='	https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png' />
            </div>
            <div className='mr-[135px]'>
                <div className="w-full flex justify-center   z-10 ">
                    <div className="    px-6 pt-3 rounded-lg flex gap-6 text-sm ">
                        <div >
                            <img width={"25px"} height={"20px"} src={flight} />
                            <Link to={"/"} className="mt-2 inline-block text-[#4a4a4a] text-[12px]">
                                Flights
                            </Link>
                        </div>
                        <div>
                            <img width={"25px"} height={"20px"} src="../../assets/triplogos/hotel-1.png" />
                            <span className="mt-2 inline-block text-[#4a4a4a] text-[12px]">
                                Hotels
                            </span>
                        </div>
                        <div>
                            <img width={"25px"} height={"20px"} src={home} />
                            <span className=" inline-block text-[#4a4a4a] text-[12px]">
                                Homestays<br /> & villas
                            </span>
                        </div>
                        <div>
                            <img width={"25px"} height={"20px"} src={holiday} />
                            <span className=" inline-block text-[#4a4a4a] text-[12px]">
                                Holiday <br />packages
                            </span>
                        </div>
                        <div>
                            <img width={"25px"} height={"20px"} src={train} />
                            <span className="mt-2 inline-block text-[#4a4a4a] text-[12px]">
                                Trains
                            </span>
                        </div>
                        <div>
                            <img width={"25px"} height={"20px"} src={buses} />
                            <span className="mt-2 inline-block text-[#4a4a4a] text-[12px]">
                                Buses
                            </span>
                        </div>
                        <div>
                            <img width={"25px"} height={"20px"} src={cabs} />
                            <span className="mt-2 inline-block text-[#4a4a4a] text-[12px]">
                                Cabs
                            </span>
                        </div>
                        <div>
                            <img width={"25px"} height={"20px"} src={forex} />
                            <span className=" inline-block text-[#4a4a4a] text-[12px]">
                                Forex Card<br /> & Currency
                            </span>
                        </div>
                        <div>
                            <img width={"25px"} height={"20px"} src={travel} />
                            <span className="mt-1 inline-block text-[#4a4a4a] text-[12px]">
                                Travel Insurance
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex gap-2 mr-2 items-center'>
                <img width={"30px"} src={login} />
                {logged ? <span className='text-xs font-bold '>{userdetail.name}</span> : <span className='text-xs font-bold cursor-pointer'

                    onClick={() => handleModal("sign")}
                >Login or <br />Create Account</span>}
            </div>
            <div className='mr-3'>
                <img width={"70px"} src={country} />
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