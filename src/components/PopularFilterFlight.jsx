/* eslint-disable no-empty */
import React, { useEffect, useState } from 'react'
import { useFlightContext } from '../FlightContext/FlightContext';

function PopularFilterFlight() {
    let [nonStop, setnonStop] = useState(false);
    let [oneStop, setoneStop] = useState(false);
    let [maxPrice, setmaxPrice] = useState();
    let [filter, setfilter] = useState();
    let [departureActive, setdepartureActive] = useState();
    const { SearchFlights } = useFlightContext();

    useEffect(() => {
        handleOnestop();
        // handlleRange();

    }, [nonStop, oneStop, maxPrice]);

    const handleOnestop = () => {
        if (nonStop && oneStop) {
            setfilter((prev) => {
                let filter1 = { ...prev, stops: { ...prev?.stops, "$gte": 0, "$lte": 1 } };
                SearchFlights(filter1);
                return filter1;
            }
            );


        } else if (nonStop && !oneStop) {
            setfilter((prev) => {
                let filter1 = { ...prev, stops: { ...prev?.stops, "$lte": 0 } };
                SearchFlights(filter1);
                return filter1;
            }
            );


        } else if (!nonStop && oneStop) {
            setfilter((prev) => {
                let filter1 = { ...prev, stops: { ...prev?.stops, "$lte": 1, "$gte": 1 } };
                SearchFlights(filter1);
                return filter1;
            }
            );


        } else {

            setfilter((prev) => {
                let filter1 = { ...prev, stops: { ...prev?.stops, "$lte": 8, "$gte": 0 } };
                SearchFlights(filter1);
                return filter1;
            }
            );

        }
        // setfilter((prev) => {
        //     let filter1 = { ...prev, ticketPrice: { ...prev?.ticketPrice, "$gte": 0, "$lte": maxPrice } };
        //     SearchFlights(filter1);
        //     return filter1;
        // });

    };

    // const handlleRange = () => {
    //     // console.log(e.target.value);


    // }


    return (
        <div className='w-[295px] h-fit shadow-xl bg-white'>
            <div className='px-[15px] py-[12px] flex flex-col'>
                <p className='mb-[15px] text-[18px] font-bold'>Popular Filters</p>
                <div className='w-[265px] h-[173px] mb-6'>
                    <div className='w-[265px] mb-[12px] h-[26px] flex items-center justify-between'>
                        <label className='flex'>
                            <span><input type='checkbox' className='w-[18px] h-[18px]'></input></span>
                            <div className='ml-[10px]'><p>Non Stop</p></div>
                        </label>
                        <span className='ml-[5px]'>₹ 4,869</span>
                    </div>
                    <div className='w-[265px] mb-[12px] h-[26px] flex items-center justify-between'>
                        <label className='flex'>
                            <span><input type='checkbox' className='w-[18px] h-[18px]'></input></span>
                            <div className='ml-[10px]'><p>Non Stop</p></div>
                        </label>
                        <span className='ml-[5px]'>₹ 4,869</span>
                    </div>
                    <div className='w-[265px] mb-[12px] h-[26px] flex items-center justify-between'>
                        <label className='flex'>
                            <span><input type='checkbox' className='w-[18px] h-[18px]'></input></span>
                            <div className='ml-[10px]'><p>Non Stop</p></div>
                        </label>
                        <span className='ml-[5px]'>₹ 4,869</span>
                    </div>
                    <div className='w-[265px] mb-[12px] h-[26px] flex items-center justify-between'>
                        <label className='flex'>
                            <span><input type='checkbox' className='w-[18px] h-[18px]'></input></span>
                            <div className='ml-[10px] '><p className='flex items-center '>
                                <span className='mr-2'><img height={"12px"} width={"12px"} src='https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/AI.png?v=18' /></span>
                                Air India</p></div>
                        </label>
                        <span className='ml-[5px]'>₹ 4,869</span>
                    </div>
                    <p className='mb-15px'>
                        <span className='text-blue-400 text-sm'>+ 5 more</span>
                    </p>

                </div>
                <div className='py-[12px] px-[15px] mb-8'>
                    <p className='mb-[15px] text-lg font-semibold'>One way Price</p>
                    <div>
                        <div>
                            <div className='my-[20px]'>
                                <input type='range' className='w-full'
                                    min="0" step="5" max="55"
                                    onChange={(e) => {
                                        let base = 2000;
                                        let fact = 20 * e.target.value;
                                        let price = base + fact;
                                        console.log(price);
                                        setmaxPrice(price);
                                        setfilter((prev) => {
                                            let filter1 = { ...prev, ticketPrice: { ...prev?.ticketPrice, "$gte": 0, "$lte": price } };
                                            SearchFlights(filter1);
                                            return filter1;
                                        });
                                    }}
                                />
                            </div>
                            <div className='flex justify-between'>
                                <span>
                                    ₹2,000
                                </span>
                                <span>
                                    ₹{maxPrice}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mb-8'>
                    <p className='mb-[15px] font-bold'>Stops From Mumbai</p>
                    <div className='w-[265px] mb-[12px] h-[26px] flex items-center justify-between'>
                        <label className='flex' >
                            <span><input type='checkbox' name='nonstop' className='w-[18px] h-[18px]'
                                onChange={(e) => {
                                    setnonStop(e.target.checked);

                                }}
                            ></input></span>
                            <div className='ml-[10px]'><p>Non Stop</p></div>
                        </label>
                        <span className='ml-[5px]'>₹ 4,869</span>
                    </div>
                    <div className='w-[265px] mb-[12px] h-[26px] flex items-center justify-between'>
                        <label className='flex'>
                            <span><input type='checkbox'
                                onChange={(e) => setoneStop(e.target.checked)}
                                className='w-[18px] h-[18px]'></input></span>
                            <div className='ml-[10px]'><p>1 Stop</p></div>
                        </label>
                        <span className='ml-[5px]'>₹ 4,869</span>
                    </div>
                </div>
                <div className='mb-8'>
                    <p className='mb-[15px] font-bold'>Departure From Mumbai</p>
                    <div className='flex flex-wrap justify-between'>
                        <div className={`mr-[10px] mb-[12px] border p-[5px] rounded-lg flex flex-col items-center cursor-pointer ${departureActive == "night" ? "bg-[#068eff] text-white" : ""}`}
                            onClick={() => setdepartureActive("night")}
                        >
                            <span><img width={"34px"} height={"34px"} src={`https://imgak.mmtcdn.com/flights/assets/media/dt/listing/left-filters/morning_${departureActive == "night" ? "" : "in"}active.png?v=1`} /></span>
                            <div className='text-[7px] font-bold text-center'>
                                Before 6 AM
                            </div>
                        </div>
                        <div className='flex'>
                            <div onClick={() => setdepartureActive("morning")} className={`mr-[10px] mb-[12px] border p-[6px] rounded-lg flex flex-col items-center cursor-pointer ${departureActive == "morning" ? "bg-[#068eff] text-white" : ""}`}>
                                <span><img width={"34px"} height={"34px"} src={`https://imgak.mmtcdn.com/flights/assets/media/dt/listing/left-filters/noon_${departureActive == "morning" ? "" : "in"}active.png?v=1`} /></span>
                                <div className='text-[7px] font-bold text-center'>
                                    6 AM - 12 PM
                                </div>
                            </div>


                        </div>
                        <div className='flex cursor-pointer' onClick={() => setdepartureActive("noon")}>
                            <div className={`mr-[10px] mb-[12px] border p-[6px] rounded-lg flex flex-col items-center ${departureActive == "noon" ? "bg-[#068eff] text-white" : ""}`}>
                                <span><img width={"34px"} height={"34px"} src={`	https://imgak.mmtcdn.com/flights/assets/media/dt/listing/left-filters/evening_${departureActive == "noon" ? "" : "in"}active.png?v=1`} /></span>
                                <div className='text-[7px] font-bold text-center'>
                                    12 PM - 6 PM
                                </div>
                            </div>


                        </div>
                        <div className='flex cursor-pointer'>
                            <div className='mr-[10px] mb-[12px] border py-[5px] px-[9px] rounded-lg flex flex-col items-center'>
                                <span><img width={"34px"} height={"34px"} src='https://imgak.mmtcdn.com/flights/assets/media/dt/listing/left-filters/night_inactive.png?v=1' /></span>
                                <div className='text-[7px] font-bold text-center'>
                                    After 6 pM
                                </div>
                            </div>


                        </div>

                    </div>

                </div>



                <div className='mb-8'>
                    <p className='mb-[15px] font-bold'>Arrival at  Mumbai</p>
                    <div className='flex flex-wrap '>
                        <div className='flex'>
                            <div className='mr-[10px] mb-[12px] border p-[6px] rounded-lg flex flex-col items-center cursor-pointer'>
                                <span><img width={"34px"} height={"34px"} src='https://imgak.mmtcdn.com/flights/assets/media/dt/listing/left-filters/noon_inactive.png?v=1' /></span>
                                <div className='text-[7px] font-bold text-center'>
                                    6 AM - 12 PM
                                </div>
                            </div>


                        </div>
                        <div className='flex cursor-pointer'>
                            <div className='mr-[10px] mb-[12px] border p-[6px] rounded-lg flex flex-col items-center'>
                                <span><img width={"34px"} height={"34px"} src='	https://imgak.mmtcdn.com/flights/assets/media/dt/listing/left-filters/evening_inactive.png?v=1' /></span>
                                <div className='text-[7px] font-bold text-center'>
                                    12 PM - 6 PM
                                </div>
                            </div>


                        </div>
                        <div className='flex cursor-pointer'>
                            <div className='mr-[10px] mb-[12px] border py-[5px] px-[9px] rounded-lg flex flex-col items-center'>
                                <span><img width={"34px"} height={"34px"} src='https://imgak.mmtcdn.com/flights/assets/media/dt/listing/left-filters/night_inactive.png?v=1' /></span>
                                <div className='text-[7px] font-bold text-center'>
                                    After 6 pM
                                </div>
                            </div>


                        </div>




                    </div>

                </div>
                <div>
                    <p className='mb-[15px] text-[18px] font-bold'>Airlines</p>
                    <div className='w-[265px] mb-[12px] h-[26px] flex items-center justify-between'>
                        <label className='flex'>
                            <span><input type='checkbox' className='w-[18px] h-[18px]'></input></span>
                            <div className='ml-[10px] '><p className='flex items-center '>
                                <span className='mr-2'><img height={"12px"} width={"12px"} src='https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/AI.png?v=18' /></span>
                                Air India</p></div>
                        </label>
                        <span className='ml-[5px]'>₹ 4,869</span>
                    </div>
                    <div className='w-[265px] mb-[12px] h-[26px] flex items-center justify-between'>
                        <label className='flex'>
                            <span><input type='checkbox' className='w-[18px] h-[18px]'></input></span>
                            <div className='ml-[10px] '><p className='flex items-center '>
                                <span className='mr-2'><img height={"12px"} width={"12px"} src='https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/AI.png?v=18' /></span>
                                Air India</p></div>
                        </label>
                        <span className='ml-[5px]'>₹ 4,869</span>
                    </div>
                    <div className='w-[265px] mb-[12px] h-[26px] flex items-center justify-between'>
                        <label className='flex'>
                            <span><input type='checkbox' className='w-[18px] h-[18px]'></input></span>
                            <div className='ml-[10px] '><p className='flex items-center '>
                                <span className='mr-2'><img height={"12px"} width={"12px"} src='https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/AI.png?v=18' /></span>
                                Air India</p></div>
                        </label>
                        <span className='ml-[5px]'>₹ 4,869</span>
                    </div>
                    <div className='w-[265px] mb-[12px] h-[26px] flex items-center justify-between'>
                        <label className='flex'>
                            <span><input type='checkbox' className='w-[18px] h-[18px]'></input></span>
                            <div className='ml-[10px] '><p className='flex items-center '>
                                <span className='mr-2'><img height={"12px"} width={"12px"} src='https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/AI.png?v=18' /></span>
                                Air India</p></div>
                        </label>
                        <span className='ml-[5px]'>₹ 4,869</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularFilterFlight